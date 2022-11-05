import React from 'react';
import { FaBeer, FaEnvelope, FaEvernote, FaPhone } from 'react-icons/fa';

const Head = () => {
    return (
        <>
            <section >
                <div className="navbar bg-blue-900 text-white min-h-0 sm:min-h-0 px-14 sm:px-5 sm:text-center ">
                    <div className="navbar-start ">
                        <span className='p-1'>
                            <FaPhone />
                        </span>
                            <label className='mr-5'>+88 017 40 100570</label>
                        <span className='p-1'>
                            <FaEnvelope />
                        </span>
                            <label> niloyabidur@gmail</label>
                    </div>
                    <div className="navbar-end ">
                        <label className='mr-5'>Theme FAQ"s</label>
                        <label className='mr-5'>Need Help?</label>
                        <span className='mr-5 sm:hidden '>🏳️‍⚧️</span>
                        <label >EN</label>
                        <span className='mr-5'> 🏳️‍⚧️</span>
                        <label>USD</label>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Head;