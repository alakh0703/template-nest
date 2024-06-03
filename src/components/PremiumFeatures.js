import React, { useState } from 'react';
import './PremiumFeatures.css';
import axios from 'axios';
import { useUserStore } from '../Stores/UserStore';

function PremiumFeatures({ onClose }) {
    const { user } = useUserStore();
    const [promoCode, setPromoCode] = useState('');

    const handleClickOutside = (e) => {
        if (e.target.className === 'premium-modal-overlay') {
            onClose();
        }
    };

    const handlePromoCodeChange = (e) => {
        setPromoCode(e.target.value);
    };

    const handlePromoCodeSubmit = async () => {
        // Implement promo code validation logic    here
        try {
            const response = await axios.post(process.env.REACT_APP_GET_PROMO, { promoCode: promoCode, token: user?.token })
            console.log(response.data);
            window.location.href = '/';
        } catch (err) {
            alert("Invalid Promo Code")
        }
    };

    const go2Stripe = () => {
        window.open('https://stripe.com/', '_blank');
    };

    const go2Payment = () => {
        window.location.href = '/premium-payment';
    };

    return (
        <div className="premium-modal-overlay" onClick={handleClickOutside}>
            <div className="premium-modal-content">
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2>Go Premium</h2>
                <p className="premium-description">
                    Unlock exclusive features with our premium plan.
                </p>
                <ul className="premium-feature-list">
                    <li className="premium-feature-item">
                        <span className="premium-tick">&#10004;</span> Unlimited template downloads
                    </li>
                    <li className="premium-feature-item">
                        <span className="premium-tick">&#10004;</span> Lifetime access
                    </li>
                    <li className="premium-feature-item">
                        <span className="premium-tick">&#10004;</span> Access to future features/templates
                    </li>
                    <li className="premium-feature-item">
                        <span className="premium-tick">&#10004;</span> Secure
                    </li>
                </ul>
                <div className="premium-modal-price">
                    <h3>$4.99 / Lifetime</h3>
                </div>
                <div className="premium-modal-actions">
                    <button className="get-premium-button" onClick={go2Payment}>Get Premium</button>
                </div>
                <div className="premium-secure-payment">
                    <p>Payment secured by <span className="stripe-logo" onClick={go2Stripe}>Stripe</span></p>
                </div>
                <div className="promo-code-section">
                    <p>or</p>
                    <p>Got a promo code?</p>
                    <input
                        type="text"
                        className="promo-code-input"
                        value={promoCode}
                        onChange={handlePromoCodeChange}
                        placeholder="Enter promo code"
                    />
                    <button className="promo-code-button" onClick={handlePromoCodeSubmit}>Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default PremiumFeatures;
