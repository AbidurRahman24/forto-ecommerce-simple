import React from 'react'
import Ndata from './Ndata'

const Cart = () => {
    return (
        <>
            <div className='py-5'>
                <div className=' flex gap-2'>
                    {Ndata.map((val, index) => {
                        return (

                            <div className='box' key={index}>
                                <div className="card w-52 bg-base-100 shadow-xl">
                                    <figure className="px-5 pt-5">
                                        <img style={{width:'100px'}} src={val.cover} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{val.name}</h2>
                                        <p>${val.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Cart