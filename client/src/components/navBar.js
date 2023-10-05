import React from 'react'
import '../styles/navBar.css'

function navBar() {
  return (
    <div className="navBar">
        <h1>Happy Feet Deals</h1>
        <div className="navBarLinks">
            <a href="/">Home</a>
            <a href="/Category">Category</a>
            <a href="/Card">Card</a>
        </div>
    </div>
  )
}

export default navBar