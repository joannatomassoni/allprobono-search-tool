import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
      <p className='footer'>Joanna Tomassoni © {year}</p>
  )
}

export default Footer;