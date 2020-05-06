import React from 'react';
import './BackButton.css'

const BackButton = ({ handleBackArrowClick, currentQuestion }) => {
  if (currentQuestion !== 'Do you need funding, or are you looking to donate?') {
    return (
      <button className='back-btn' onClick={handleBackArrowClick}>Back</button>
    )
  } else {
    return (
      <button className='back-btn' onClick={handleBackArrowClick}>   </button>
    );
  }
}

export default BackButton