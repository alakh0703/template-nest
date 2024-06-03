import React from 'react';
import './WarningModal.css';

function WarningModal({ show, onClose }) {
    if (!show) {
        return null;
    }

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="warning-modal-overlay" onClick={handleOverlayClick}>
            <div className="warning-modal-content">
                <span className="warning-modal-close-button" onClick={onClose}>&times;</span>
                <div className="warning-modal-body">
                    <p>Don't do that! 😜</p>
                </div>
            </div>
        </div>
    );
}

export default WarningModal;
