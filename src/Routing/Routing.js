import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Cart from '../components/Cart/Cart'
import Home from '../components/homepage/Home'
import Productdetails from '../components/products/Productdetails'
import Products from '../components/products/Products'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path="/products" element={<Products/>}/>
            <Route path='/products/:id' element={<Productdetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default Routing