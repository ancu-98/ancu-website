import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './styles/contact.css'
const serviceId = import.meta.env.VITE_MY_SERVICE_ID
const templateId = import.meta.env.VITE_MY_TEMPLATE_ID
const publicKey = import.meta.env.VITE_MY_PUBLIC_KEY

const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    event.target.reset();
  }

  return (
    <div className='form__container'>
      <div className='form__title'>
        <div className="box">C</div>
        <div className="box">O</div>
        <div className="box">N</div>
        <div className="box">T</div>
        <div className="box">A</div>
        <div className="box">C</div>
        <div className="box">T</div>
        <div className="box">&#45;</div>
        <div className="box">M</div>
        <div className="box">E</div>
      </div>
      <form ref={form} className='form__mail' onSubmit={sendEmail}>
        <div className='input_group'>
          <input type="text" name="user_name" id='input_name' required />
          <label htmlFor="input_name">Name</label>
        </div>
        <hr />
        <div className='input_group'>
          <input type="email" name="user_email" id='input_email' autoComplete='on' required />
          <label htmlFor="input_email">Email</label>
        </div>
        <hr />
        <div className='input_text'>
          <textarea name="user_message" required placeholder='Message' />
        </div>
        <hr />

        <div className='button_container'>
          <div className="bt" id="bt">
            <span className="msg" id="msg"></span>
            <input type="submit" value="Send" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact