import React from 'react';
import './Cancel.css';

function Cancel() {
    return (
        <div className="cancel-page-container">
            <div className="cancel-page-content">
                <div className="cancel-page-icon">&#10060;</div>
                <h2 className="cancel-page-heading">Payment Canceled</h2>
                <p className="cancel-page-message">We're sorry to see you go. Your payment has been canceled.</p>
                <button className="cancel-page-explore-button" onClick={() => window.location.href = '/explore'}>Explore Templates</button>
                <button className="cancel-page-retry-button" onClick={() => window.location.href = '/payment'}>Retry Payment</button>
            </div>
        </div>
    );
}

export default Cancel;
