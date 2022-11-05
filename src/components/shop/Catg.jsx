import React from 'react'
import { Link } from 'react-router-dom'
import cate1 from '../../assets/top2.jpg'

const Catg = () => {
    const data = [
        {
            cateImg: cate1,
            cateName: "Apple",
        },
        {
            cateImg: cate1,
            cateName: "Samasung",
        },
        {
            cateImg: cate1,
            cateName: "Oppo",
        },
        {
            cateImg: cate1,
            cateName: "Vivo",
        },
        {
            cateImg: cate1,
            cateName: "Redimi",
        },
        {
            cateImg: cate1,
            cateName: "Sony",
        },
    ]
    return (
        <>
            <ul className="dropdown-content menu p-2 drop-shadow-lg bg-base-100 rounded-box w-64">
                <div className='flex justify-between text-3xl p-3'>
                    <h1>Brands </h1>
                    <h1>Shops </h1>
                </div>
                {data.map((value) => {
                    return (
                        <div key={value.id}>
                            <li><Link to={'/'}>{value.cateName}</Link></li>
                        </div>
                    )
                })}
                <div className='btn'>
          <button>View All Brands</button>
        </div>
            </ul>
            

        </>
    )
}

export default Catg