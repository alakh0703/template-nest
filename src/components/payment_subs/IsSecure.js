import React from 'react';
import './IsSecure.css';

function IsSecure({ onClose }) {
    const handleClose = (e) => {
        if (e.target.classList.contains('secure-modal')) {
            onClose();
        }
    };

    const go2Stripe = () => {
        window.open('https://stripe.com/', '_blank');
    }


    return (
        <div className="secure-modal" onClick={handleClose}>
            <div className="secure-modal-content">
                <div className="secure-modal-header">
                    <h2>Payment Security</h2>
                </div>
                <div className="secure-modal-body">
                    <p>Your payment is 100% secure.</p>
                    <p>Payments are processed by <strong className='stripe' onClick={go2Stripe}>Stripe</strong>, a highly secure and trusted payment gateway.</p>
                    <p>We do not store or have access to your payment information.</p>
                </div>
            </div>
        </div>
    );
}

export default IsSecure;
