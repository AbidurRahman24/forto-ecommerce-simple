import React from 'react';
import { FaCaretRight } from 'react-icons/fa';
import Catg from './Catg';
import ShopCart from './ShopCart';

const Shop = ({ shopItems, addToCart }) => {
    console.log(shopItems)
    return (
        <>
            <section className=' bg-slate-50 '>
                <div className="container mx-auto py-10 ">
                    <div className="flex justify-between ">
                        <div className="flex inline-block align-middle">
                            <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
                            {/* <FaBorderAll className="pl-2 text-4xl text-red-700 items-center" /> */}
                            < h1 className='pl-3 text-4xl'> <b>Mobile Phones</b></h1>
                        </div>
                        <div className=' pl-3 flex  items-center'>
                            <span>View all</span>
                            <FaCaretRight />
                        </div>
                    </div>
                    <div class="flex py-5">
                <div className="basis-1/4 ">
                    <Catg />
                </div>
                <div className="basis-3/4 gap-3">
                    <div className="flex flex-wrap">
                    <ShopCart   shopItems={ shopItems} addToCart={addToCart}/>
                        </div> 
                </div>
            </div>

                </div>
            </section>
        </>
    );
};

export default Shop;