import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className='sidebar_main'>
            <div className='sidebar_profile'>
                <div className='sidebar_avater'></div>
                <a href="/profile" className='sidebar_profile_link'>Profile</a>
            </div>
            <div className="sidebar_links">
                <a href="/templates" className="sidebar_link" >TEMPLATES</a>
                <a href="/FAQ" className="sidebar_link">FAQ</a>
                <a href="/CONTACT" className="sidebar_link">CONTACT</a>
                <a href="/ABOUT" className="sidebar_link">ABOUT</a>

            </div>
        </div>
    )
}

export default Sidebar