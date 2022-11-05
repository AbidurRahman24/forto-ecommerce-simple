import React, { useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaHeart, FaLongArrowAltLeft, FaLongArrowAltRight, FaPlus, FaStar } from 'react-icons/fa'
import './style.css'

// const SampleNextArrow = (props) => {
//     const { onClick } = props
//     return (
//         <div className='control-btn' onClick={onClick}>
//             <button className='next'>
//                 <FaLongArrowAltRight />
//             </button>
//         </div>
//     )
// }
// const SamplePrevArrow = (props) => {
//     const { onClick } = props
//     return (
//         <div className='control-btn' onClick={onClick}>
//             <button className='prev'>
//                 <FaLongArrowAltLeft />
//             </button>
//         </div>
//     )
// }
const FlashCard = ({ productItems, addToCart }) => {
    // console.log(productItems)
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
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
            <Slider {...settings}>
                {productItems.map((productItems) => {
                    return (
                        <div className="card w-96 bg-base-100 shadow-xl ">
                            <figure>
                                <img style={{ width: '200px' }} src={productItems.cover} alt="Shoes" /></figure>
                            <div className="card-body">
                            <button class="flex gap-2">
                                <FaHeart className='text-rose-500'  onClick={increment} />
                                <div class="badge badge-secondary">{count}</div>
                            </button>
                                <span className='discount'>{productItems.discount}% Off</span>
                                <h2 className="card-title">
                                {productItems.name}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <div className='flex text-amber-400'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <p>${productItems.price}.00 </p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">
                                    <button onClick={() => addToCart(productItems)}>
                               <FaPlus />
                              </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    )
                })}
            </Slider>
        </>
    )
}

export default FlashCard

// <div className='box'>
                        //   <div className='product mtop'>
                        //     <div className='img'>
                        //       <span className='discount'>{productItems.discount}% Off</span>
                        //       <img style={{width:'250px'}} src={productItems.cover} alt='' />
                        //       <div className='product-like'>
                        //         <label>{count}</label> <br />
                        //         <i className='fa-regular fa-heart' onClick={increment}></i>
                        //       </div>
                        //     </div>
                        //     <div className='product-details'>
                        //       <h3>{productItems.name}</h3>
                        //       
                        //       <div className='price'>
                        //         <h4>${productItems.price}.00 </h4>
                        //         {/* step : 3  
                        //          if hami le button ma click garryo bahne 
                        //         */}
                        //         <button onClick={() => addToCart(productItems)}>
                        //           <i className='fa fa-plus'></i>
                        //         </button>
                        //       </div>
                        //     </div>
                        //   </div>
                        // </div>