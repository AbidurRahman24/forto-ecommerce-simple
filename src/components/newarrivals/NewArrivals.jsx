import React from 'react'
import { FaCaretRight } from 'react-icons/fa'
import Cart from './Cart'

const NewArrivals = () => {
  return (
    <>
    <section className=' bg-slate-50 '>
            <div className="container mx-auto py-10">
            <div className="flex justify-between">
                <div className="flex inline-block align-middle">
                <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                    {/* <FaBorderAll className="pl-2 text-4xl text-red-700 items-center" /> */}
                    < h1 className='pl-3 text-4xl'> <b>New Arrivals </b></h1>
                </div>
                <div className=' pl-3 flex  items-center'>
                    <span>View all</span>
                    <FaCaretRight />
                </div>
            </div>
            <Cart />
            </div>
        </section>
    </>
  )
}

export default NewArrivals