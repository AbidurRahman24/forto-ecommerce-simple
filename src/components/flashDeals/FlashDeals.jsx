import React from 'react';
import { FaBold, FaBolt } from 'react-icons/fa';
import FlashCard from './FlashCard';
import './style.css'
const FlashDeals = ({productItems, addToCart}) => {
    return (
        <>
        <section className='flash bg-slate-50 pb-10'>
        <div className='container mx-auto px-5 py-4'>
          <div className='heading flex py-5'>
            <FaBolt className='text-red-700 items-cente pl-3 text-4xl' />
            <h1 className='pl-3 text-4xl'> <b>Flash Delas</b></h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
        </>
    );
};

export default FlashDeals;