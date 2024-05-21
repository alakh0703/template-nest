import React from 'react';
import './Contact.css';
import contactImg from "../logos/contactme.png"

function Contact() {
    return (
        <div className='contact_main'>
            <div className='contact_container'>
                <div className='contact_left'>
                    <img src={contactImg} alt='contact' />
                </div>
                <div className='contact_right'>
                    <div className='contact_title'>
                        <h1>Get In Touch</h1>
                    </div>
                    <div className='contact_form'>
                        <input type='text' placeholder='Name' />
                        <input type='email' placeholder='Email' />
                        <input type='text' placeholder='Subject' />
                        <textarea placeholder='Message'></textarea>
                    </div>
                    <div className='contact_button'>
                        <button>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact