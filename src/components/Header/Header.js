import React from 'react'
import './Header.css'
import logo from '../Logo-1.png'

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