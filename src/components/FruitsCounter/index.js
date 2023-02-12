import './index.css'

const FruitsCounter=()=>{
    
    render(){
        
        return(
            <div className="bgContainer">
                <div className="Container">
                    <h1 className="head">Bob ate <span>0</span> mangoes <span>0</span> bananas</h1>
                    <div className="fruitContainer">
                    <div className="mangoContainer">
                    <img className="image" src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="mango"/>
                    <button type="button" onClick={this.EatMango} className="mangoButton">Eat Mango</button>

                    </div>
                    <div className="bananaContainer">
                    <img className="image" src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="banana"/>
                    <button type="button" onClick={this.EatBanana} className="mangoButton">Eat Banana</button>

                    </div>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default FruitsCounter