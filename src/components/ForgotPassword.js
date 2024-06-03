import React, { useState } from 'react';
import "./ForgotPassword.css";
import axios from 'axios';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [showSecurityQuestion, setShowSecurityQuestion] = useState(false);
    const [securityAnswer, setSecurityAnswer] = useState('');
    const [securityQuestion, setSecurityQuestion] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        // You would typically validate the email and get the security question from the backend here
        try {
            const res = await axios.post(process.env.REACT_APP_FORGOT_PASSWORD_URL, { email });
            const { securityQuestion } = res.data;

            if (res?.status === 200) {
                setSecurityQuestion(securityQuestion);
                setShowSecurityQuestion(true);
            }
            else {
                alert("Invalid email. Please try again.")
            }

        } catch (error) {
            alert("Invalid email. Please try again.")
        }
    };

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        // Handle the password reset logic here
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const res = await axios.post(process.env.REACT_APP_RESET_PASSWORD_URL, {
                email,
                securityAnswer,
                newPassword
            });

            if (res?.status === 200) {
                alert("Password reset successful");
                window.location.href = "/login";
            } else {
                alert("Invalid security answer. Please try again.")
            }
        } catch (error) {
            console.error('Error resetting password', error);
        }
    };



    return (
        <div className="forgot-password-container">
            <div className="forgot-password-box">
                {!showSecurityQuestion ? (
                    <form onSubmit={handleEmailSubmit} className="forgot-password-form-group">
                        <label>
                            Enter your email address:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="forgot-password-input-field"
                                required
                            />
                        </label>
                        <button type="submit" className="forgot-password-button">Change Password</button>
                    </form>
                ) : (
                    <form onSubmit={handlePasswordReset} className="forgot-password-form-group">
                        <label>
                            {securityQuestion}
                            <input
                                type="text"
                                value={securityAnswer}
                                onChange={(e) => setSecurityAnswer(e.target.value)}
                                className="forgot-password-input-field"
                                required
                            />
                        </label>
                        <label>
                            New Password:
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="forgot-password-input-field"
                                required
                            />
                        </label>
                        <label>
                            Confirm Password:
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="forgot-password-input-field"
                                required
                            />
                        </label>
                        <button type="submit" className="forgot-password-button">Submit Answer</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default ForgotPassword;
