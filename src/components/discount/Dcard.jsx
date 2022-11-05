import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ddata from "./Ddata"
import "../newarrivals/style.css"

const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          return (
            <>
              <div className='box py-3 ml-2' key={index}>
                                <div className="card w-52 bg-base-100 shadow-xl">
                                    <figure className="px-5 pt-5">
                                        <img style={{width:'100px'}} src={value.cover} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{value.name}</h2>
                                        <p>${value.price}</p>
                                    </div>
                                </div>
                            </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Dcard