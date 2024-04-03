import '../styles/home.css'
import CategoryCard from '../components/categoryCard/CategoryCard'
import CardProduct from '../components/card/CardProduct'
import { useEffect, useState } from 'react'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(product => {
        setProducts(product)
      })
  }, [])
  return (
    <>
      <div className="categoryContainer">
        <CategoryCard
          title={'Electronics'}
          img={
            'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          cateRef={'/home/electronics'}
        />
        <CategoryCard
          title={"Men's"}
          img={
            'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          cateRef={'/home/menclothing'}
        />

        <CategoryCard
          title={"Women's"}
          img={
            'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          cateRef={'/home/womenclothing'}
        />
        <CategoryCard
          title={'Jewelery'}
          img={
            'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          cateRef={'/home/jewelery'}
        />
      </div>

      <div className="productsContainer">
        {products.map(product => (
          <CardProduct
            key={product.id}
            title={product.title}
            url_image={product.image}
            price={product.price}
            link_ref={`product/${product.id}`}
          />
        ))}
      </div>
    </>
  )
}
