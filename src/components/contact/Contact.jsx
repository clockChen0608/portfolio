import React from 'react'
import './contact.css'
import { BsMailbox2, BsMessenger, BsWhatsapp, BsLine } from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className="contact__option">
            <BsMailbox2 className='contact__option-icon' />
            <h4>Email</h4>
            <h5>joijoijoi2001@jack6203.onmicrosoft.com</h5>
            <a href='joijoijoi2001@jack6203.onmicrosoft.com' target='__blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon' />
            <h4>Message</h4>
            <h5>TZU-HENG CHEN</h5>
            <a href='https://m.me/1316387370' target='__blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+886918286248</h5>
            <a href='https://api.whatsapp.com/send?phone=886918286248' target='__blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <BsLine className='contact__option-icon' />
            <h4>Line</h4>
            <h5>jkes6203</h5>
            <a href='https://line.me/ti/p/~jkes6203' target='__blank'>Send a Message</a>
          </article>
        </div>
      </div>
      {/* END OF OPTION */}
      <form target="_blank" action="https://formsubmit.co/joijoijoi2001@jack6203.onmicrosoft.com" method="POST">
        <input type="text" name="name" class="form-control" placeholder="Full Name" required />
        <input type="email" name="email" class="form-control" placeholder="Email Address" required />
        <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
        <button type="submit" className="btn btn-primary">Submit Form</button>
      </form>


    </section>
  )
}

export default Contact