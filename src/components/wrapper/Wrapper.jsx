import React from 'react';
import { FaHeadset, FaIdCard, FaTruck, FaUserShield } from 'react-icons/fa';

const Wrapper = () => {
    const data = [
        {
          cover: <FaTruck />,
          title: "Worldwide Delivery",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <FaIdCard />,
          title: "Safe Payment",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <FaUserShield />,
          title: "Shop With Confidence ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover:<FaHeadset />,
          title: "24/7 Support ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
      ]
    return (
        <>
            <section className='bg-slate-50'>
        <div className='container mx-auto py-10 flex gap-3'>
          {data.map((val, index) => {
            return (
                <div className="card w-86 bg-base-100 shadow-xl " key={index}>
  <figure className="px-10 pt-10 bg-base-100">
    <i className='text-2xl '>{val.cover}</i>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{val.title}</h2>
    <p>{val.decs}</p>
  </div>
</div>
            //   <div className='product' >
            //     <div className='img icon-circle'>
            //       <i>{val.cover}</i>
            //     </div>
            //     <h3>{val.title}</h3>
            //     <p>{val.decs}</p>
            //   </div>
            )
          })}
        </div>
      </section>
        </>
    );
};

export default Wrapper;