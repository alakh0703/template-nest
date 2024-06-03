import React, { useState } from 'react';
import './DeleteAccount.css';
import axios from 'axios';
import { useUserStore } from '../../Stores/UserStore';

function DeleteAccount({ onClose }) {
    const { user, clearUser } = useUserStore();
    const [password, setPassword] = useState('');

    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleClickOutside = (e) => {
        if (e.target.className === 'delete-modal-overlay') {
            onClose();
        }
    };

    const handleDelete = async () => {
        if (password === '') {
            alert('Password is required');
            return;
        }
        const res = await axios.post(process.env.REACT_APP_DELETE_USER_URL, { password, email: user?.email, token: user?.token })
        if (res.status === 400) {
            alert('Session expired, please login again');
            clearUser();
            onClose();
        }
        if (res.status === 401) {
            alert('Incorrect password');
            return;
        }

        if (res.status !== 200) {
            alert('Error deleting account');
            return;
        }

        if (res.status === 200) {
            alert('Account deleted successfully');
            clearUser();
            onClose();
            window.location.href = '/';
        }

    };

    return (
        <div className="delete-modal-overlay" onClick={handleClickOutside}>
            <div className="delete-modal-content">
                <h2>Delete Account</h2>
                <p>Are you sure you want to delete your account? This action cannot be undone.</p>
                <div className="delete-modal-section">
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </label>
                </div>
                <div className="delete-modal-actions">
                    <button onClick={handleDelete} className="delete-button">Delete</button>
                    <button onClick={onClose} className="cancel-button">Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteAccount;
