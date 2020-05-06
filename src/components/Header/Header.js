import React from 'react'
import './Header.css'

const Header = ({ handleHeaderClick }) => {
  return (
    <div className='header'>
      <button onClick={handleHeaderClick}>COVID Financial Roadmap</button>
      <div className='line'></div>
    </div>
    
  )
}

export default Header