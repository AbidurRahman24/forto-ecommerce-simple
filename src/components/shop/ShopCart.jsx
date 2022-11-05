import React, { useState } from 'react';
import { FaHeart, FaPlus, FaStar } from 'react-icons/fa';

const ShopCart = ({ shopItems, addToCart }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
    }
    return (
        <>
            {shopItems.map((shopItems, index) => {
                return (
                    <div className="card w-64 bg-base-100 shadow-xl p-3 m-3">
                            <figure >
                                
                                <img style={{width:'200px'}} src={shopItems.cover} alt='' />
                            </figure>
                            <div className="card-body p-3">
                            <span className='discount'>{shopItems.discount}% Off</span>
                                <h3 className="card-title">{shopItems.name}</h3>
                                <div className='flex text-orange-600'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div className="card-actions justify-between">
                                    <h4>${shopItems.price}.00 </h4>
                                    <button onClick={() => addToCart(shopItems)}>
                                        <FaPlus className='text-yellow-600 text-2xl' />
                                    </button>
                                </div>
                            </div>
                        </div>
                )
            })}
        </>
    );
};

export default ShopCart;