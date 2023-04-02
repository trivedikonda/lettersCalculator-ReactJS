// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputText: '',
  }

  onEnteringPhrase = event => {
    const newText = event.target.value
    this.setState({inputText: newText})
  }

  render() {
    const {inputText} = this.state
    const count = inputText.length
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Calculate the Letters you enter</h1>

          <label className="label-text" htmlFor="userInput">
            Enter the phrase
          </label>
          <input
            className="input"
            type="text"
            id="userInput"
            placeholder="Enter the phrase"
            onChange={this.onEnteringPhrase}
          />

          <p className="count-letters">No.of letters: {count}</p>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="calc-image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
