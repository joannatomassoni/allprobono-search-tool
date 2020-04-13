import React from 'react';
import './BackButton.css'

const BackButton = ({ handleBackArrowClick, currentQuestion }) => {
  if (currentQuestion !== 'Do you need funding, or are you looking to donate?') {
    return (
      <button className='back-arrow' onClick={handleBackArrowClick}>&larr; <div>Back</div></button>
    )
  } else {
    return null;
  }
}

export default BackButton