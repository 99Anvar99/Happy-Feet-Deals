import React from 'react'
import "../styles/product.css"

export const Product = (props) => {
    const { id, name, price, productImage } = props.data
  return (
    <div className="product">
      <img src={productImage} alt={name} />
      <div className="description">
        <p>{name}</p>
        <p>Price: ${price}</p>
        <button className="addToCartBttn">Add to Cart</button>
      </div>
    </div>
  )
}
