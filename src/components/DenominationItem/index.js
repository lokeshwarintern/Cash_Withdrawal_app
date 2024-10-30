import './index.css'

const DenominationsItem = props => {
  const {denominationItem, withdraw} = props
  const {value} = denominationItem

  const withdrawMoney = () => {
    withdraw(value)
  }

  return (
    <li>
      <button type="button" className="btn-ele" onClick={withdrawMoney}>
        {value}
      </button>
    </li>
  )
}

export default DenominationsItem
