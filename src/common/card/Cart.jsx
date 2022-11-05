import React from 'react';
import { FaMarker, FaMinus, FaPlus, FaRegTimesCircle } from 'react-icons/fa';

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
    const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
    return (
        <>
            <section className="container mx-auto px-4 py-10  flex">
                <div className="grid-cols-1 w-8/12 ">
                    <div className="card bg-base-100 ">
                        <div className="card-body">
                            {CartItem.length === 0 && <h2 className="card-title">No Items are add in Cart</h2>}
                            {CartItem.map((item) => {
                                const productQty = item.price * item.qty
                                return (
                                    <>
                                        <div className="card lg:card-side bg-base-100 shadow-xl">
                                            <figure><img style={{ width: '200px' }} src={item.cover} alt="Movie" /></figure>
                                            <div className='pl-10 items-center pr-10'>
                                                <h2 className="card-title items-center">{item.name}</h2>
                                                <br />
                                                <p className='items-center'>${item.price}.00 * {item.qty} <span>${productQty}.00</span></p>

                                            </div>
                                            <div className='cart-items-function'>
                      <button className='btn mr-3'>
                        <FaRegTimesCircle className=' text-lg' />
                      </button>
                    </div>
                                            <div className='cartControl d_flex'>
                      <button className='btn mr-3 ' onClick={() => addToCart(item)}>
                        <FaPlus />
                      </button>
                      <button className='btn' onClick={() => decreaseQty(item)}>
                        <FaMinus />
                      </button>
                    </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Cart Summary</h2>
                        <h4>Total Price : ${totalPrice}.00</h4>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;

