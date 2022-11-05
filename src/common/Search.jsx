import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
const Search = ({CartItem}) => {
  return (
    <>
    <div className="navbar bg-base-100 p-0 min-h-0 px-10">
  <div className="navbar-start w-1/12 ">
    
    <Link to={'/'} className="btn btn-ghost normal-case text-xl">
        <img className='w-24' src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex w-10/12 flex justify-center ">
    <ul className="menu menu-horizontal p-0 ">
      <li>
        
      <div className=' search-box f_flex '>
        <FaSearch />
            {/* <i className='fa fa-search'></i> */}
            <input  type='text' placeholder='Search and hit enter...' className="w-full md:w-auto p-2 bg-slate-100 rounded  searchInput" />
            <span>All Category</span>
          </div>
      </li>
    </ul>
  </div>
  <div className="navbar-end w-2/12 ">
  <div className='icon f_flex width flex sm:aline-center '>
            <button className="btn btn-ghost btn-circle">
      <FaUser />
    </button>
            <div className='cart pl-4'>
              <Link to='/cart'>
              <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">
          {CartItem.length === 0 ? "" : CartItem.length}
          </span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
      </div>
                {/* <i className='fa fa-shopping-bag icon-circle'></i> */}
                {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
              </Link>
            </div>
          </div>
  </div>
</div>
    </>
  )
}

export default Search