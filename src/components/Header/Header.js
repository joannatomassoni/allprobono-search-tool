import React from 'react'
import './Header.css'

const Header = ({ handleHeaderClick }) => {
  return (
    <div className='header'>
      <button onClick={handleHeaderClick}><h2>COVID Financial Roadmap</h2></button>
    </div>
    
  )
}

export default Header