import React from 'react'
import { PRODUCTS } from '../components/product'
import { Product } from '../pages/product'
// importing style
import '../styles/home.css'

function home() {
  return (
    <div className="home">
      <h1 id="homeTitle">Products</h1>
      <div className="products">
       {PRODUCTS.map((product) => (
         <Product data={product} />
       ))}
      </div>
    </div>
  )
}

export default home