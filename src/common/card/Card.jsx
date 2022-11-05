import React from 'react';

const Card = ({ CartItem, addToCart, decreaseQty }) => {
    const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
    return (
        <>
            <section>
                <div className="container mx-auto px-4 grid grid-cols-3 gap-4">
                    <div className="card w-96 bg-base-100 shadow-xl col-span-2">
                        <div className="card-body">
                            {CartItem.length === 0 && <h2 className="card-title">No Items are add in Cart</h2>}
                            {CartItem.map((item) => {
                                const productQty = item.price * item.qty
                                return (
                                    <div className="card card-side bg-base-100 shadow-xl">
                                        <figure><img src={item.cover} alt="Movie" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{item.name}</h2>
                                            <p>${item.price}.00 * {item.qty} <span>${productQty}.00</span></p>
                                            <label className="swap text-6xl">
                                                <div className="swap-on">🥵</div>
                                                <div className="swap-off">🥶</div>
                                            </label>
                                        </div>
                                    </div>
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

export default Card;