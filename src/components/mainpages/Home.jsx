import React from 'react';
import Catagories from './Catagories';
import Slider from './Slider';
import './Home.css'
const Home = () => {
    return (
        <>
            <div class="container mx-auto px-3 py-4 flex ">
                <div className="md:basis-1/4 ">
                    <Catagories />
                </div>
                <div className="basis-3/4 sm:basis-4/4">
                    <Slider />
                </div>
            </div>
        </>
    );
};

export default Home;

{/* <section className="home">
                <div className="container mx-auto px-5 py-4">
                    <div class="grid grid-cols-4 gap-4">
                        <div class="...">
                            <Catagories />
                        </div>
                        <div class="col-span-3 ...">

                            {/* <SlideCard /> */}
            //                 <Slider />
            //             </div>
            //         </div>

            //     </div>
            // </section> */}