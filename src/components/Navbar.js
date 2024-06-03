import React, { useState } from 'react'
import { useUserStore } from "../Stores/UserStore"
import logo from '../logos/logo-png.png'
import "./Navbar.css"
import ProfileDiv from "./navbar_subs/ProfileDiv"
import Sidebar from "./navbar_subs/Sidebar"
function Navbar() {
    const { user } = useUserStore()
    const [sidebar, setSidebar] = useState(false)



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
                <a href="/accreditation" className="navbar_link">CREDITS</a>

            </div>

            <div className="navbar_profile">
                {user.name === null ?
                    <a href="/login" className="upsale-button" >
                        <span>Login</span>
                    </a> :
                    <ProfileDiv />


                }

            </div>
            <div className="navbar_hamburger">
                <label htmlFor="check" className="label_check"  >
                    <input type="checkbox" id="check" onChange={toggleSidebar} />
                    <span className="cs check_span"></span>
                    <span className="cs check_span2"></span>
                    <span className="cs check_span3"></span>
                </label>
            </div>
            {sidebar ? <Sidebar /> : null}
        </div>
    )
}

export default Navbar