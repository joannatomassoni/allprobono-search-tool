import React from 'react';
import './StartOverButton.css'

const StartOverButton = ({ handleStartOver, currentQuestion }) => {
  if (currentQuestion !== 'Do you need funding, or are you looking to donate?') {
    return (
      <button className='back-btn' onClick={handleStartOver}>Start Over</button>
    )
  } else {
    return (
      <button className='back-btn'>   </button>
    );
  }
}

export default StartOverButton