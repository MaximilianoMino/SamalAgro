import React from 'react'
import './contactbtn.css'
const ContactBtn = ({text, action}) => {
    text = text.toUpperCase()
  return (
    <button className='contact-btn' onClick={() => action(true)}>{text}</button>
  )
}

export default ContactBtn