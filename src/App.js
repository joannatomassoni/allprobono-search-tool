import React from "react";
import './App.css'
import Layout from './components/Layout'
import ChoiceButton from './components/ChoiceButton'
import QAMap from './QAMap'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 'Do you need funding, or are you looking to donate?',
      currentChoices: ['Looking for funds', 'Looking to donate'],
      answers: new Map(),
      counter: 0
    }
  }

  handleButtonClick = (buttonText) => {
    let { answers, counter, currentQuestion } = this.state;
    this.setState({
      answers: answers.set(currentQuestion, buttonText),
      counter: counter + 1,
      currentQuestion: QAMap.get(buttonText),
      currentChoices: QAMap.get(QAMap.get(buttonText)),
    })
  }

  handleBackArrowClick = () => {
    let { answers, counter } = this.state;
    const answersArray = [...answers.keys()]
    console.log(answersArray);
    if (counter) {
      // set current question to the previous one in the array and decrement counter
      this.setState({
        currentQuestion: answersArray[counter - 1],
        currentChoices: QAMap.get(answersArray[counter - 1]),
        counter: counter - 1
      })
    }
  }

  render() {
    const { currentQuestion, currentChoices} = this.state;
    
    return (
      <div className='App'>
          <div className='current-question'>{currentQuestion}</div>
          <div className='choices-container'>
            {currentChoices.map((choice) => {
              return (
                <ChoiceButton key={choice} text={choice} handleButtonClick={this.handleButtonClick}/>
              )
            })}
          </div>
          <button className='back-arrow' onClick={this.handleBackArrowClick}>&larr; <div>Back</div></button>
      </div>
    )
  }
}
export default App