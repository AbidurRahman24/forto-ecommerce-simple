import React from 'react';
import annu1 from '../../assets/annn1.jpg'
import annu3 from '../../assets/annu3.jpg'

const Annocument = () => {
    const mystyle = {
        width: "25%",
        height: "340px",
      }
      const mystyle1 = {
        width: "68%",
        height: "340px",
      }
    return (
        <>
          <section className='bg-slate-50'>
        <div className='container mx-auto py-10 flex  gap-3'>
          <div className='img' style={mystyle}>
            <img src={annu3} width='100%' style={{height: "340px",}} />
          </div>
          <div className='img' style={mystyle1}>
            <img src={annu1} width='100%' style={{height: "340px",}} />
          </div>
        </div>
      </section>   
        </>
    );
};

export default Annocument;