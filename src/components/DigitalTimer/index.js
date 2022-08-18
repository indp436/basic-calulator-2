import {Component} from 'react'
import './index.css'

class Calculator extends Component {
  state = {
    ans: 0,
    firstValue: 0,
    isFunctionStarted: false,
    count: 0,
    sign: '',
    multiplyCount: 0,
    divideCount: 0,
    equalsMultiplyValue: 1,
    intoEqualsCount: 0,
  }

  buttonClicked = event => {
    let {ans} = this.state

    ans = ans.toString()

    if (ans[0] === '0') {
      ans = ans.substring(1)
    }
    if (ans[0] === '.') {
      ans = ans.replace(/^/, '0')
    }
    this.setState({
      ans: ans + event.target.value,
    })
  }

  plusButtonClicked = () => {
    const {ans} = this.state
    this.setState(prevState => ({
      firstValue: prevState.firstValue + parseFloat(ans),
      ans: 0,
      sign: '+',
      isFunctionStarted: false,
    }))
  }

  minusButtonClicked = () => {
    const {count} = this.state
    if (count === 0) {
      let {ans} = this.state
      ans = parseFloat(ans)
      this.setState(prevState => ({
        ans: 0,
        firstValue: ans,
        count: prevState.count + 1,
        sign: '-',
        isFunctionStarted: false,
      }))
    } else {
      let {ans} = this.state

      ans = parseFloat(ans)
      this.setState(prevState => ({
        firstValue: prevState.firstValue - ans,
        count: prevState.count + 1,
        ans: 0,
        sign: '-',
        isFunctionStarted: false,
      }))
    }
  }

  intoButtonClicked = () => {
    const {multiplyCount} = this.state
    if (multiplyCount === 0) {
      let {ans} = this.state
      ans = parseFloat(ans)
      this.setState(prevState => ({
        ans: 0,
        firstValue: ans,
        multiplyCount: prevState.multiplyCount + 1,
        sign: '*',
        isFunctionStarted: false,
        equalsMultiplyValue: 1,
      }))
    } else {
      let {ans} = this.state
      ans = parseFloat(ans)
      this.setState(prevState => ({
        firstValue: prevState.firstValue * ans,
        multiplyCount: prevState.multiplyCount + 1,
        ans: 0,
        sign: '*',
        isFunctionStarted: false,
      }))
    }
  }

  dividedButtonClicked = () => {
    const {divideCount} = this.state
    if (divideCount === 0) {
      let {ans} = this.state
      ans = parseFloat(ans)
      this.setState(prevState => ({
        ans: 0,
        firstValue: ans,
        divideCount: prevState.divideCount + 1,
        sign: '/',
        isFunctionStarted: false,
      }))
    } else {
      let {ans} = this.state
      ans = parseFloat(ans)
      this.setState(prevState => ({
        firstValue: prevState.firstValue / ans,
        divideCount: prevState.divideCount + 1,
        ans: 0,
        sign: '/',
        isFunctionStarted: false,
      }))
    }
  }

  equalsButtonClicked = () => {
    const {ans, sign} = this.state
    this.setState(prevState => ({
      count: prevState.count + 1,
      divideCount: prevState.divideCount + 1,
      intoEqualsCount: prevState.intoEqualsCount + 1,
    }))
    const {intoEqualsCount} = this.state
    if (sign === '+') {
      this.setState(prevState => ({
        firstValue: prevState.firstValue + parseFloat(ans),
        isFunctionStarted: true,
        ans: 0,
      }))
    } else if (sign === '-') {
      this.setState(prevState => ({
        firstValue: prevState.firstValue - parseFloat(ans),
        isFunctionStarted: true,
        ans: 0,
      }))
    } else if (sign === '*') {
      if (intoEqualsCount === 0) {
        const {firstValue} = this.state
        this.setState(prevState => ({
          firstValue: prevState.firstValue * parseFloat(ans),
          isFunctionStarted: true,
          ans: firstValue,
          equalsMultiplyValue: firstValue,
          intoEqualsCount: prevState.intoEqualsCount + 1,
        }))
      } else {
        const {firstValue, equalsMultiplyValue} = this.state
        this.setState(prevState => ({
          firstValue:
            prevState.firstValue * parseFloat(ans / equalsMultiplyValue),
          isFunctionStarted: true,
          ans: firstValue,
          equalsMultiplyValue: firstValue,
        }))
      }
    } else if (sign === '/') {
      this.setState(prevState => ({
        firstValue: prevState.firstValue / parseFloat(ans),
      }))
      this.setState({isFunctionStarted: true})
      this.setState({ans: 0})
    }
  }

  clearButtonClicked = () => {
    this.setState({
      ans: 0,
      firstValue: 0,
      isFunctionStarted: false,
      sign: '',
      count: 0,
      multiplyCount: 0,
      divideCount: 0,
      intoEqualsCount: 0,
      equalsMultiplyValue: null,
    })
  }

  render() {
    const {firstValue, isFunctionStarted} = this.state
    let {ans} = this.state
    if (ans === '.') {
      ans = ans.toString()
      ans = 0 + ans
    }
    return (
      <div className="bg">
        <div className="cal-container">
          <p className="result-container">
            {isFunctionStarted ? firstValue : ans}
          </p>
          <div className="buttons-container">
            <div className="signsButtons-container">
              <button
                type="button"
                className="btn  blue-button"
                onClick={this.plusButtonClicked}
              >
                +
              </button>
              <button
                type="button"
                className="btn  blue-button"
                onClick={this.minusButtonClicked}
              >
                -
              </button>
              <button
                type="button"
                className="btn blue-button"
                onClick={this.intoButtonClicked}
              >
                x
              </button>
              <button
                type="button"
                className="btn"
                value="7"
                onClick={this.buttonClicked}
              >
                7
              </button>
              <button
                type="button"
                className="btn"
                value="8"
                onClick={this.buttonClicked}
              >
                8
              </button>
              <button
                type="button"
                className="btn"
                value="9"
                onClick={this.buttonClicked}
              >
                9
              </button>
              <button
                type="button"
                className="btn"
                value="4"
                onClick={this.buttonClicked}
              >
                4
              </button>
              <button
                type="button"
                className="btn"
                value="5"
                onClick={this.buttonClicked}
              >
                5
              </button>
              <button
                type="button"
                className="btn"
                value="6"
                onClick={this.buttonClicked}
              >
                6
              </button>
              <button
                type="button"
                className="btn"
                value="1"
                onClick={this.buttonClicked}
              >
                1
              </button>
              <button
                type="button"
                className="btn"
                value="2"
                onClick={this.buttonClicked}
              >
                2
              </button>
              <button
                type="button"
                className="btn"
                value="3"
                onClick={this.buttonClicked}
              >
                3
              </button>
              <button
                type="button"
                className="btn"
                value="0"
                onClick={this.buttonClicked}
              >
                0
              </button>
              <button
                type="button"
                className="btn"
                value="."
                onClick={this.buttonClicked}
              >
                .
              </button>
              <button
                type="button"
                className="btn clear"
                onClick={this.clearButtonClicked}
              >
                Clear
              </button>
            </div>
            <div className="equal-container">
              <button
                type="button"
                className="btn blue-button divide"
                onClick={this.dividedButtonClicked}
              >
                ÷
              </button>
              <button
                className="btn isEqualBtn"
                type="button"
                onClick={this.equalsButtonClicked}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Calculator
