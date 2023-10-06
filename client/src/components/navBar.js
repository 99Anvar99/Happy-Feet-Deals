import React from 'react'
import '../styles/navBar.css'
import { ShoppingCart } from "phosphor-react";
function navBar() {
  return (
    <div className="navBar">
        <h1>Happy Feet Deals</h1>
        <div className="navBarLinks">
            <a href="/">Home</a>
            <a href="/Category">Category</a>
            <a href="/Card"><ShoppingCart size={24} weight="fill"/></a>
        </div>
    </div>
  )
}

export default navBar