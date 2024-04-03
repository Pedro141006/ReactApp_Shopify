import { useState } from 'react'

export default function useCartCollections() {
  const [products, setProducts] = useState(() => {
    const storedCart = localStorage.getItem('cart-product')
    if (!storedCart) return []
    return JSON.parse(storedCart)
  })

  const addCart = ({ id, img, title, price, quantity }) => {
    const product = { id, img, title, price, quantity }
    setProducts(state => {
      const newState = [...state, product]
      localStorage.setItem('cart-product', JSON.stringify(newState))
      return newState
    })
  }

  const removeItem = id => {
    setProducts(state => {
      const newState = state.filter(products => products.id !== id)
      localStorage.setItem('cart-product', JSON.stringify(newState))
      return newState
    })
  }

  return { products, addCart, removeItem }
}
