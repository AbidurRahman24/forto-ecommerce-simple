import React from 'react'
import Head from './Head'
import Navbar from './Navbar'
import Search from './Search'
import './Header.css'
const Header = ({CartItem}) => {
  return (
    <div className='drop-shadow-xl ' >
    <Head />
    <Search CartItem={CartItem}/>
    <Navbar />
    </div>
  )
}

export default Header