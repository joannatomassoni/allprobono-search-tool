import React from "react";
import Layout from './components/Layout'
import ChoiceButton from './components/ChoiceButton'
import QAMap from './QAMap'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 'Are you interested in donating, or do you need funding?',
      currentChoices: ['Looking for funding', 'Looking to donate']
    }
  }

  handleButtonClick = (nextQ) => {
    this.setState({
      currentQuestion: QAMap.get(nextQ),
      currentChoices: QAMap.get(this.state.currentQuestion)
    })
  }

  render() {
    const { currentQuestion, currentChoices } = this.state;
    return (
      <div className='App'>
        <Layout>
          <div>{currentQuestion}</div>
          {currentChoices.map((choice) => {
            return (
              <ChoiceButton text={choice} handleButtonClick={this.handleButtonClick}/>
            )
          })}
        </Layout>
      </div>
    )
  }
}
export default App