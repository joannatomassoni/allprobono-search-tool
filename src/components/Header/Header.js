import React from 'react'
import './Header.css'
import logo from '../logos/Header-Logo.png'

const Header = ({ handleHeaderClick }) => {
  return (
    <div className='header'>
      <button>
        <img src={logo} alt='logo' onClick={handleHeaderClick}/>
      </button>
    </div>
    
  )
}

export default Header