import React from 'react';
import './ChoiceButton.css'

const ChoiceButton = ({ text, handleButtonClick }) => (
    <button className='choice-btn' onClick={() => handleButtonClick(text)}>{text}</button>
)

export default ChoiceButton