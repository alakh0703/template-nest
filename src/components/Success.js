import React, { useEffect } from 'react';
import './Success.css';
import { useUserStore } from '../Stores/UserStore';
import axios from 'axios';

function Success() {
    const { user, clearUser } = useUserStore();
    const paymentSucceed = async () => {
        const response = await axios.post(process.env.REACT_APP_PAYMENT_SUCCESS, {
            token: user?.token
        });
        console.log(response.data);

    }

    const go2templates = () => {
        window.location.href = '/templates';
    }
    useEffect(() => {
        if (!user || !user.token) {
            clearUser()
            window.location.href = '/login';
        }

        paymentSucceed();


    }, []);
    return (
        <div className="success-page-container">
            <div className="success-page-content">
                <div className="success-page-tick-container">
                    <div className="success-page-tick">&#10004;</div>
                </div>
                <h1 className="success-page-heading">Thank you!</h1>
                <p className="success-page-message">You are now a premium user.</p>
                <button className="success-page-explore-button" onClick={go2templates}>Explore Templates</button>
            </div>
        </div>
    );
}

export default Success;
