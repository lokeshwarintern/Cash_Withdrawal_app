import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    cash: 2000,
  }

  withdraw = value => {
    this.setState(prevState => ({cash: prevState.cash - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {cash} = this.state

    return (
      <div className="bg-container">
        <div className="withdraw-container">
          <div className="name-card">
            <p className="first-letter">S</p>
            <h1 className="name-ele">Sarah Williams</h1>
          </div>
          <div className="balance-card">
            <p className="your-blnc-text">Your Balance</p>
            <p className="balance-amount">
              {cash}
              <br />
              <span className="span-ele">In Rupees</span>
            </p>
          </div>
          <div>
            <p className="withdraw-text">Withdraw</p>
            <p className="choose-sum-text">CHOOSE SUM (IN RUPEES)</p>
            <ul className="ul-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  key={eachItem.id}
                  denominationItem={eachItem}
                  withdraw={this.withdraw}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
