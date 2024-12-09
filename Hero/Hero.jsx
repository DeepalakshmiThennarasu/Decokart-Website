import React from 'react';
import './Hero.css';
import hero_image from '../Assests/buddha.webp';
import hand_icon from '../Assests/welcome.jpg';
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>New</p>
                <img src={hand_icon} alt="welcome" />
            </div>
            <p>Aesthetic</p><br/>
            <p>products available</p>
        </div>
        <div className="hero-latest-btn">
            <div>Epic Collections</div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="Decor" width={'600px'}  height={'400px'} />
      </div>
    </div>
  )
}

export default Hero;
