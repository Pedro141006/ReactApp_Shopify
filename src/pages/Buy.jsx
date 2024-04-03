import { Link } from 'react-router-dom'
import '../styles/buy.css'
import { useState } from 'react'

export default function Buy() {
  let total = localStorage.getItem('total')
  const [parcelas, setParcelas] = useState(1)

  function clearDataLocal() {
    localStorage.removeItem('cart-product')
    localStorage.removeItem('total')
  }

  return (
    <>
      <div className="finishContainer">
        <div className="optionsPurchase">
          <select
            class="form-select"
            aria-label="Default select example"
            defaultValue={'Method'}
          >
            <option value="Method">Method</option>
            <option value="debit">debit</option>
            <option value="credit">credit</option>
          </select>

          <select
            class="form-select"
            aria-label="Default select example"
            defaultValue={parcelas}
            onChange={e => setParcelas(e.target.value)}
          >
            <option value={1}>1X</option>
            <option value={2}>2X</option>
            <option value={3}>3X</option>
            <option value={4}>4X</option>
            <option value={5}>5X</option>
            <option value={6}>6X</option>
            <option value={7}>7X</option>
            <option value={8}>8X</option>
            <option value={9}>9X</option>
            <option value={10}>10X</option>
            <option value={11}>11X</option>
            <option value={12}>12X</option>
          </select>

          <Link
            className="btn btn-success"
            to={'/home/finish'}
            onClick={clearDataLocal}
          >
            Finish purchase
          </Link>
        </div>
        <div className="totalInformation">
          <h2>Total: ${parseFloat(total / parcelas).toFixed(2)}</h2>
        </div>
      </div>
    </>
  )
}
