import React from 'react';
import { Link } from 'react-router-dom';

const Catagories = () => {
    const data = [
        {
          id:1,
          cateImg: <i class="fa-solid fa-shirt"></i>,
          cateName: "Fashion",
        },
        {
          id:2,
          cateImg: <i class="fa-duotone fa-laptop-medical"></i>,
          cateName: "Electronic",
        },
        {
          id:3,
          cateImg: <i class="fa-duotone fa-car"></i>,
          cateName: "Cars",
        },
        {
          id:4,
          cateImg: <i class="fa-sharp fa-solid fa-house-tree"></i>,
          cateName: "Home & Garden",
        },
        {
          id:5,
          cateImg: <i class="fa-duotone fa-gift"></i>,
          cateName: "Gifts",
        },
        {
          id:6,
          cateImg: <i class="fa-duotone fa-music"></i>,
          cateName: "Music",
        },
        {
          id:7,
          cateImg: <i class="fa-duotone fa-notes-medical"></i>,
          cateName: "Health & Beauty",
        },
        {
          id:8,
          cateImg: <i class="fa-solid fa-paw-claws"></i>,
          cateName: "Pets",
        },
      ]
    return (
        <>
        <ul className="dropdown-content menu p-2 drop-shadow-lg bg-base-100 rounded-box w-64">
        {data.map((value) => {
          return (
             <div  key={value.id}>
                <li><Link to={'/'}>{value.cateName}</Link></li>
            </div> 
          )
        })}
      </ul>
        </>
    );
};

export default Catagories;