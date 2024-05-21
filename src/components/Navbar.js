import "./Navbar.css"
import React, { useState } from 'react'
import logo from '../logos/logo-png.png'
import Sidebar from "./navbar_subs/Sidebar"
import LoginModal from "./navbar_subs/LoginModal"
function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const [loginModal, setLoginModal] = useState(false)

    const showLoginModal = () => {
        setLoginModal(!loginModal)
    }

    const go2Home = () => {
        window.location.href = '/'
    }



    const toggleSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <div className="navbar_main">
            <div className='navbar_logodiv'>
                <img src={logo} alt="logo" className='navbar_logo' onClick={go2Home} />
            </div>
            <div className="navbar_links">
                <a href="/templates" className="navbar_link" >TEMPLATES</a>
                <a href="/FAQ" className="navbar_link">FAQ</a>
                <a href="/CONTACT" className="navbar_link">CONTACT</a>
                <a href="/ABOUT" className="navbar_link">ABOUT</a>

            </div>

            <div className="navbar_profile">
                {/* <div className="avatar"></div> */}
                <a href="/login" class="upsale-button" >
                    <span>Login</span>
                </a>
            </div>
            <div className="navbar_hamburger">
                <label for="check" className="label_check"  >
                    <input type="checkbox" id="check" onChange={toggleSidebar} />
                    <span className="cs check_span"></span>
                    <span className="cs check_span2"></span>
                    <span className="cs check_span3"></span>
                </label>
            </div>
            {loginModal ? <LoginModal isOpen={showLoginModal} setIsOpen={setLoginModal} /> : null}
            {sidebar ? <Sidebar /> : null}
        </div>
    )
}

export default Navbar