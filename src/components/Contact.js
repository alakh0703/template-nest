import React, { useState } from 'react';
import './Contact.css';
import contactImg from '../logos/contactme.png';
import axios from 'axios';

function Contact() {
    const [isExceeds, setIsExceeds] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        if (formData.name === '' || formData.email === '' || formData.message === '') {
            alert('Please fill all the fields');
            return;
        }
        if (formData.message.length > 500) {
            alert('Message should be less than 500 characters');
            return;
        }
        try {
            const response = await axios.post(process.env.REACT_APP_GET_USER_DETAIL, {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message
            })

            if (response.status === 201) {
                alert('Message sent successfully');
            } else {
                alert('Message sending failed');
            }
        } catch (error) {
            alert('Message sending failed');
        }
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

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
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type='text'
                            name='subject'
                            placeholder='Subject'
                            value={formData.subject}
                            onChange={handleChange}
                        />
                        <textarea
                            name='message'
                            placeholder='Message'
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <div className={formData?.message?.length > 500 ? 'exceeds' : 'character-count'}>{formData?.message.length} / 500 characters</div>
                        <div className='contact_button'>
                            <button onClick={handleSubmit}>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
