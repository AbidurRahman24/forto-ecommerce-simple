import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Tdata from "./Tdata"

const TopCard = () => {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
    }
    return (
        <>
            <div className='my-5'>
                <Slider {...settings}>
                    {Tdata.map((value, index) => {
                        return (
                            <>
                                <div className="card w-96 mx-auto  bg-slate-50 image-full">
                                    <figure><img className='opacity-95' style={{width:'100px'}} src={value.cover} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{value.para}</h2>
                                        <p>{value.desc}</p>
                                    </div>
                                </div>

                            </>
                        )
                    })}

                </Slider>


            </div>
        </>
    )
}

export default TopCard