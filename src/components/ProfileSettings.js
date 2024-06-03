import React, { useEffect, useRef, useState } from 'react';
import './ProfileSettings.css';
import { useUserStore } from '../Stores/UserStore';
import ChangePassword from './profile_sett_subs/ChangePassword';
import axios from 'axios';
import DeleteAccount from './profile_sett_subs/DeleteAccount';
import PremiumFeatures from './PremiumFeatures';

function ProfileSettings() {
    const { user, setUser, clearUser } = useUserStore();
    const [isPremiumUser, setIsPremiumUser] = useState(false);
    const [deleteAccount, setDeleteAccount] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [premium, setPremium] = useState(false);
    const newNameRef = useRef();

    const toggleChangePassword = () => {
        setChangePassword(!changePassword);
    }

    const saveChanges = async () => {

        const newName = newNameRef.current.value;

        if (newName === '') {
            return
        }

        if (newName === user.name) {
            return
        }
        const newUser = { ...user, name: newName }
        const token = newUser?.token

        const res = await axios.post(process.env.REACT_APP_UPDATE_NAME_URL, { newName, email: user.email, token })

        if (res.status === 400) {
            clearUser()
            alert('Session Expired')
            return

        }
        if (res.status != 200) {
            alert('Something went wrong')
            return
        }

        if (res.status === 200) {
            alert('Changes Saved')
            setUser(newUser)

        }
    }

    const fetchUserDetails = async () => {
        const token = user?.token;
        if (!token) {
            clearUser()
            window.location.href = '/login';
            return;

        }
        const res = await axios.post(process.env.REACT_APP_GET_USER_URL, { token })
        const data = res.data
        const { name, email, isPremiumUser } = data
        setUser({ name, email, token, isPremiumUser })

        setIsPremiumUser(isPremiumUser)
    }

    useEffect(() => {
        if (user?.name === null || user?.email === null || user?.token === null) {
            window.location.href = '/'
        }

        fetchUserDetails()
    }, [])
    return (
        <div className="profile-settings">
            <div className='profile-settings-main'>
                <h1>Profile Settings</h1>
                {!isPremiumUser ? <div className='profile-settings-get-premium' onClick={() => setPremium(true)}>
                    <p>Get Premium</p>
                </div> :
                    <div className='profile-settings-get-premium2' >
                        <p>You are a Premium Member</p>
                    </div>}
                {premium && <PremiumFeatures onClose={() => setPremium(false)} />
                }                <div className='profile-sett-name'>
                    <p>Name</p>
                    <input type='text' placeholder={user?.name} ref={newNameRef} />
                </div>
                <div className='profile-sett-email'>
                    <p>Email</p>
                    <input type='email' placeholder={user?.email} disabled />
                </div>
                <div className='profile-sett-password'>
                    <p>Password</p>
                    <input type='password' placeholder='********' disabled />
                </div>
                <div className='profile-sett-password2'>
                    <p onClick={toggleChangePassword}>Change Password</p>
                    {changePassword && <ChangePassword onClose={toggleChangePassword} />}
                </div>
                <div className='profile-sett-btns'>
                    <button className='profile-sett-save' onClick={saveChanges}>Save</button>
                    <button className='profile-sett-delete' onClick={() => setDeleteAccount(true)}>Delete Account</button>
                    {deleteAccount && <DeleteAccount onClose={() => setDeleteAccount(false)} />}
                </div>
            </div>
        </div>
    );
}

export default ProfileSettings;
