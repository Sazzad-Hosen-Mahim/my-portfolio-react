import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_77jjoir', 'template_mh4hxde', form.current, 'I0_Njla0bWDm-XmZd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
            <article className='contact-option'>
              <MdOutlineEmail className='contact-option-icon'/>
              <h4>Email</h4>
              <h5>mmahim67@gmail.com</h5>
              <a href="mailto:mmahim67@gmail.com" target='_blank'>Send a message</a>

            </article>
            <article className='contact-option'>
              <RiMessengerLine className='contact-option-icon'/>
              <h4>Messenger</h4>
              <h5>Sazzad Hosen</h5>
              <a href="https://m.me/sazzad.mahimm" target='_blank'>Send a message</a>

            </article>
            <article className='contact-option'>
              <ImWhatsapp className='contact-option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+8801857589709</h5>
              <a href="https://wa.me/+8801857589709" target='_blank'>Send a message</a>

            </article>
        </div>
        {/* End of contact option  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact