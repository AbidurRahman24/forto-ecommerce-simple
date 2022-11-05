import React, { useState } from 'react'
import Header from './common/Header'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Pages from './pages/Pages';
import Data from './components/Data';
import Cart from './common/card/Cart';
import './App.css'
import Sdata from './components/shop/Sdata';


const App = () => {

  const {productItems} = Data
  const { shopItems } = Sdata
  // console.log(shopItems);
  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  return (
    <div >
    <BrowserRouter>
      <Header CartItem={CartItem}/>
      <Routes>
      <Route path="/" element={<Pages  productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>}></Route>
      <Route path="/home" element={<Pages  productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>}></Route>
      <Route path="/cart" element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App