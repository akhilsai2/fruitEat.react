import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  EatMango = () => {
    this.setState(prevState => ({
      mango: prevState.mango + 1,
      banana: prevState.banana,
    }))
  }

  EatBanana = () => {
    this.setState(prevState => ({
      mango: prevState.mango,
      banana: prevState.banana + 1,
    }))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bgContainer">
        <div className="Container">
          <h1 className="head">
            Bob ate <span>{mango}</span> mangoes <span>{banana}</span> bananas
          </h1>
          <div className="fruitContainer">
            <div className="mangoContainer">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                type="button"
                onClick={this.EatMango}
                className="mangoButton"
              >
                Eat Mango
              </button>
            </div>
            <div className="mangoContainer">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                type="button"
                onClick={this.EatBanana}
                className="mangoButton"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
