import '../styles/cart.css'
import CartCard from '../components/cartCard/CartCard'
import useCartCollections from '../hooks/useCartCollections'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { products, removeItem } = useCartCollections()

  let total = products.reduce(getTotal, 0)
  function getTotal(total, item) {
    return total + item.price * item.quantity
  }

  function payment() {
    localStorage.setItem('total', total)
  }

  return (
    <>
      <div className="cartSection">
        <div className="cardInformation">
          <h3>Sub-total: ${parseFloat(total).toFixed(2)}</h3>
          <Link
            className="btn btn-success btnPurchase"
            to={'/home/buy'}
            onClick={payment}
          >
            Buy
          </Link>
        </div>

        <div className="productsContainer">
          {products.map(product => (
            <CartCard
              key={product.id}
              img={product.img}
              title={product.title}
              quantity={product.quantity}
              price={product.price}
              removeProduct={() => {
                removeItem(product.id)
              }}
            />
          ))}
        </div>
      </div>
    </>
  )
}
