import React from 'react'

import './Contact.scss';

const Contact = () => {
    return (
        <div className='Contact_Component'>
            <div className='main_container'>
                <div className='contact_container'>
                    <h2>Get In Touch</h2>
                    <p>For any dev opportunity please send me an email</p>
                    <a target="_blank" rel="noreferrer" href='mailto:michlawbang123@gmail.com' className='contact_btn'>
                            Send Message
                    </a>
                    <p className='or'>OR</p>
                    <p>Call me: +23279-596-449 / +23230-076-018</p>
                </div>
            </div>
        </div>
    )
}

export default Contact