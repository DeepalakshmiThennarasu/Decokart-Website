import React from 'react'
import './Footer.css'
import logo from '../Assests/logo.png'

import insta_icon from '../Assests/insta.png'
import pin_icon from '../Assests/pintrest.png'
import what_icon from '../Assests/whatsapp.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
      <img src={logo} alt="logo" width={"80px"} />
        <p>DecoKart</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
           <img src={insta_icon} alt="icon" width={'30px'} />
        </div>
        <div className="footer-icons-container">
        <img src={pin_icon} alt="icon" width={'30px'} />
        </div>
        <div className="footer-icons-container">
        <img src={what_icon} alt="icon"  width={'30px'}/>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p> &#169;Copyright @2023 - All Right Reserved </p>
      </div>
    </div>
  )
}

export default Footer
