import React, { useState } from 'react'
import "./contact.css"
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import 'dotenv/config'

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    // Email JS code snippet
    const handleSubmit = (e) =>{
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <div className='c'>
        {/* <div className='c-big'></div> */}
        <div className='c-wrapper'>
            <div className='c-left'>
                <h1 className='c-title'>
                    Let's discuss your project
                </h1>
                <div className='c-info'>
                    <div className='c-info-item'>
                        <img src='../../img/phone.png' alt='' className='c-icon'/>
                        <p>+88 01682568271</p>
                    </div>
                    <div className='c-info-item'>
                        <img src='../../img/email.png' alt='' className='c-icon'/>
                        <p>mhasan.meet@gmail.com</p>
                    </div>
                    <div className='c-info-item'>
                        <img src='../../img/location.png' alt='' className='c-icon'/>
                        <p>Khilkhet, Dhaka</p>
                    </div>
                </div>
            </div>

            <div className='c-right'>
                <p className='c-right-title'><b>What's your story?</b> Get in touch always available for freelancing if the righ project comes along me</p>

                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name"/>
                    <input type="text" placeholder="subject" name="user_subject"/>
                    <input type="email" placeholder="Email" name="user_email"/>
                    <textarea rows="5" placeholder="Message" name="message"/>
                    <button>Submit</button>
                    {done && " Thank You. Soon You're get contacted by Mahmudul"}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact