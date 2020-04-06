import React from 'react';
import './BackButton.css'

const BackButton = ({ handleBackArrowClick }) => {
  return (
    <button className='back-arrow' onClick={handleBackArrowClick}>&larr; <div>Back</div></button>
  )
}

export default BackButton