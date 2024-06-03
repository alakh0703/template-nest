import React, { useState } from 'react';
import './ChangePassword.css';
import axios from 'axios';
import { useUserStore } from '../../Stores/UserStore';

function ChangePassword({ onClose }) {
    const { user, clearUser } = useUserStore();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleOldPasswordChange = (e) => setOldPassword(e.target.value);
    const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const handleUpdatePassword = async () => {
        // Logic for updating the password
        console.log('Old password:', oldPassword);
        console.log('New password:', newPassword);
        console.log('Confirm password:', confirmPassword);


        if (oldPassword === '' || newPassword === '' || confirmPassword === '') {
            alert('All fields are required');
            return;
        }

        if (newPassword !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const res = await axios.post(process.env.REACT_APP_UPDATE_PASSWORD_URL, { oldPassword, newPassword, email: user?.email, token: user?.token })
            if (res?.status === 400) {
                clearUser();
                alert('Session expired, please login again');
                onClose();
                return;
            }
            if (res?.status === 401) {
                alert('Incorrect old password');
                return;
            }
            if (res?.status !== 200) {
                alert('Error updating password');
                return;
            }

            if (res?.status === 200) {
                alert('Password updated successfully');
                onClose();
            }
        }
        catch (err) {
            console.log(err);
            alert("Invalid old password")
        }

    };

    const handleClickOutside = (e) => {
        if (e.target.className === 'modal-overlay') {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleClickOutside}>
            <div className="modal-content">
                <h2>Change Password</h2>
                <div className="modal-section">
                    <label>
                        Old Password:
                        <input
                            type="password"
                            value={oldPassword}
                            onChange={handleOldPasswordChange}
                        />
                    </label>
                </div>
                <div className="modal-section">
                    <label>
                        New Password:
                        <input
                            type="password"
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                        />
                    </label>
                </div>
                <div className="modal-section">
                    <label>
                        Confirm New Password:
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </label>
                </div>
                <div className="modal-actions">
                    <button onClick={handleUpdatePassword}>Update Password</button>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
