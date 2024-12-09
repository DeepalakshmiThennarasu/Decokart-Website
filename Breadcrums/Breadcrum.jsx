import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assests/arrow1.png'


const Breadcrum = (props) => {
    const{Product}=props;
  return (
    <div className='breadcrum'>
      HOME  <img src={arrow_icon} alt="arrow"  width={'10px'}/> SHOP  <img src={arrow_icon} alt="arrow"  width={'10px'}/>{Product.category} <img src={arrow_icon} alt="arrow"  width={'10px'}/>{Product.name}
      
    </div>
  )
}

export default Breadcrum
