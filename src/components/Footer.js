import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer_main'>
            <div className="footer_content">
                {/* <div className="footer_section">
                    <h4><a href="/about">ABOUT US</a></h4>
                </div> */}
                <div className="footer_section">
                    <h4><a href="/contact">CONTACT</a></h4>
                </div>
                <div className="footer_section">
                    <h4><a href="/accreditation">CREDITs</a></h4>
                </div>
                <div className="footer_section">
                    <h4>FOLLOW US</h4>
                    <div className="social_icons">
                        <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                        <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <p>&copy; 2024 TemplateHub. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
