import React from 'react';
import './App.css'
import ChoiceButton from './components/ChoiceButton'
import StartOverButton from './components/StartOverButton'
import Results from './components/Results'
import QAMap from './data/QAMap'
import orgData from './data/orgData'
import filterOrgs from './data/filterOrgs'
import ReactModal from './components/ReactModal'
import Header from './components/Header'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 'Do you need funding, or are you looking to donate?',
      currentChoices: ['Looking for funds', 'Looking to donate'],
      answers: new Map(),
      counter: 0,
      modalVisible: false,
      results: orgData
    }
  }

  handleButtonClick = (buttonText) => {
    let { answers, counter, currentQuestion } = this.state;
    // set results state to result of calling filterOrgs with recent question/answer
    const filtered = filterOrgs(currentQuestion, buttonText, this.state.results);
    this.setState({
      results: filtered
    })
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
    if (counter) {
      // set current question to the previous one in the array and decrement counter
      this.setState({
        currentQuestion: answersArray[counter - 1],
        currentChoices: QAMap.get(answersArray[counter - 1]),
        counter: counter - 1
      })
    }
  }

  handleHeaderClick = () => {
    this.setState({
      currentQuestion: 'Do you need funding, or are you looking to donate?',
      currentChoices: ['Looking for funds', 'Looking to donate'],
      counter: 0,
      results: orgData
    })
  }

  handleGetResults = () => {
    this.setState({
      results: [orgData]
    })
  }

  render() {
    const { currentQuestion, currentChoices} = this.state;
    
    if (currentChoices) {
      return (
        <div className='App'>
          <Header handleHeaderClick={this.handleHeaderClick}/>
          <div className='main-content'>
            <div className='question-container'>
              <div className='current-question'>{currentQuestion}</div>
              <div className='choices-container'>
                {currentChoices.map((choice) => {
                  return (
                    <ChoiceButton key={choice} text={choice} handleButtonClick={this.handleButtonClick}/>
                  )
                })}
              </div>
              <StartOverButton handleStartOver={this.handleHeaderClick} currentQuestion={currentQuestion}/>
            </div>
          </div>
          <ReactModal/>
        </div>
      )
    } else {
      const { results } = this.state;
      return (
        <div className='App'>
          <Header handleHeaderClick={this.handleHeaderClick}/>
          <div className='main-content'>
            <Results results={results}/>
          </div>
          <StartOverButton handleStartOver={this.handleHeaderClick} currentQuestion={currentQuestion} />

          <ReactModal/>
        </div>
      )
    }
  }
}

export default App