import React, { useState, useRef, useEffect } from 'react';
import "./ProfileDiv.css";
import { useUserStore } from '../../Stores/UserStore';

function ProfileDiv() {
    const { clearUser } = useUserStore();
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef(null);

    const handleClickOutside = (event) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target)) {
            setIsOpen(false);
        }

    };

    const logout = () => {
        clearUser();
        window.location.href = '/';
    }

    const go2Profile = () => {
        window.location.href = '/profile-setting';
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className='avatar' onClick={() => setIsOpen(!isOpen)}>
                <img src="data:image/jpeg;base64,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" alt="avatar" className="avatar_img" />
            </div>
            <div ref={popoverRef} className={`profileDiv_main ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li onClick={go2Profile}>Profile</li>
                    <li onClick={logout}>Logout</li>
                </ul>
            </div>
        </>
    );
}

export default ProfileDiv;
