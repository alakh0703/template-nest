import React, { useState, useEffect } from 'react';
import { useUserStore } from '../Stores/UserStore';
import './PaymentPage.css';
import IsSecure from './payment_subs/IsSecure';
import { countries } from '../Data/Countries';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

function PaymentPage() {
    const { user, clearUser } = useUserStore();
    const [isSecureModalOpen, setIsSecureModalOpen] = useState(false);
    const [showExchangeRateInfo, setShowExchangeRateInfo] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        country: '',
        currency: ''
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        country: '',
        currency: ''
    });
    const [price, setPrice] = useState(4.99);
    const [currencySymbol, setCurrencySymbol] = useState('$');

    const currencies = ["CAD", "USD", "EUR", "GBP", "INR"];
    const exchangeRates = {
        CAD: 1.36,
        USD: 1,
        EUR: 0.92,
        GBP: 0.78,
        INR: 83.13
    };

    const currencySymbols = {
        CAD: 'CA$',
        USD: '$',
        EUR: '€',
        GBP: '£',
        INR: '₹'
    };

    const go2Stripe = () => {
        window.open('https://stripe.com/', '_blank');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
        setFormErrors({
            ...formErrors,
            [name]: ''
        });
        if (name === 'currency') {
            setPrice((4.99 / exchangeRates.USD) * exchangeRates[value]);
            setCurrencySymbol(currencySymbols[value]);
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!formValues.name) {
            errors.name = 'Name is required';
        }
        if (!formValues.email) {
            errors.email = 'Email is required';
        }
        if (!formValues.country) {
            errors.country = 'Country is required';
        }
        if (!formValues.currency) {
            errors.currency = 'Currency is required';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const checkout = async () => {
        if (validateForm()) {
            console.log('Form Values:', formValues);
            try {
                const response = await axios.post(process.env.REACT_APP_PAYMENT_START, {
                    token: user?.token,
                    email: formValues.email,
                    currency: formValues.currency,
                    name: formValues.name,
                    country: formValues.country
                });
                console.log(response.data);

                if (response.status === 201) {
                    const { url } = response.data;
                    if (url) {
                        window.location.href = url;
                    }
                } else if (response.status === 401) {
                    clearUser();
                    alert('Session expired. Please login again.');
                    window.location.href = '/login';
                } else if (response.status === 400) {
                    alert('Error in payment. Please try again.');
                }
            } catch (error) {
                console.error('Payment error:', error);
                alert('Error in payment. Please try again.');
            }
        }
    };

    useEffect(() => {
        if (!user?.name || !user?.token) {
            window.location.href = '/login';
        }
    }, [user]);

    return (
        <div className="payment-page">
            <div className="payment-form">
                <h2>Checkout</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            onChange={handleInputChange}
                            value={formValues.name}
                            className={formErrors.name ? 'error' : ''}
                        />
                        {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            onChange={handleInputChange}
                            value={formValues.email}
                            className={formErrors.email ? 'error' : ''}
                        />
                        {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select
                            id="country"
                            name="country"
                            required
                            onChange={handleInputChange}
                            value={formValues.country}
                            className={formErrors.country ? 'error' : ''}
                        >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                                <option key={country?.name} value={country?.name}>{country?.name}</option>
                            ))}
                        </select>
                        {formErrors.country && <span className="error-message">{formErrors.country}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="currency">Currency</label>
                        <select
                            id="currency"
                            name="currency"
                            required
                            onChange={handleInputChange}
                            value={formValues.currency}
                            className={formErrors.currency ? 'error' : ''}
                        >
                            <option value="">Select Currency</option>
                            {currencies.map((currency) => (
                                <option key={currency} value={currency}>{currency}</option>
                            ))}
                        </select>
                        {formErrors.currency && <span className="error-message">{formErrors.currency}</span>}
                    </div>
                </form>
                <p className="secure-payment">
                    <a href="#" onClick={() => setIsSecureModalOpen(true)}>Is payment secure?</a>
                </p>
                <p className="secure-payment">
                    <a href="#" onClick={() => setShowExchangeRateInfo(!showExchangeRateInfo)}>Exchange Rates</a>
                    {showExchangeRateInfo && <p className="exchange-rate-info">Exchanges rates are based on 2nd June, 2024</p>}
                </p>
                <p className="redirect-info">
                    You will be redirected to <strong className='stripe' onClick={go2Stripe}>Stripe</strong> for payment.
                </p>
            </div>
            <div className="order-summary">
                <h3>Order Summary</h3>
                <div className="order-item">
                    <p className='order-item-1'>Template Nest Premium</p>
                    <p className='order-item-2'>Quantity: 1</p>
                    <p className='order-item-3'>Price: {currencySymbol}{price.toFixed(2)}</p>
                </div>
                <button className="checkout-button" onClick={checkout}>Checkout</button>
            </div>
            {isSecureModalOpen && <IsSecure onClose={() => setIsSecureModalOpen(false)} />}
            <Outlet />
        </div>
    );
}

export default PaymentPage;
