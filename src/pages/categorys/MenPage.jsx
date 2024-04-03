import { useEffect, useState } from 'react'
import CardProduct from '../../components/card/CardProduct'

export default function MenPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
      .then(res => res.json())
      .then(product => {
        setProducts(product)
      })
  }, [])

  return (
    <>
      <h2>Men's Clothing</h2>
      <hr />
      <div className="productsContainer">
        {products.map(product => (
          <CardProduct
            key={product.id}
            title={product.title}
            url_image={product.image}
            price={product.price}
            link_ref={`/home/product/${product.id}`}
          />
        ))}
      </div>
    </>
  )
}
