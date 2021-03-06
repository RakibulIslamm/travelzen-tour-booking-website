import React from 'react';
import banner from '../../../images/Banner3.jpg'

const Banner = () => {
    return (
        <div className="py-52 xs:py-28 flex items-center px-20 xs:px-5 bg-cover bg-top bg-no-repeat" style={{
            backgroundImage: `linear-gradient(45deg, rgba(0, 1, 46, .8), rgba(1, 2, 82, 0)), url(${banner})`
        }}>
            <div>
                <h1 className="text-white text-5xl xs:text-3xl xs:pt-10 lg:w-96 uppercase font-extrabold tracking-wide leading-tight">Get Closer To Nature</h1>
                <button className="px-12 py-3 xs:py-2 bg-yellow-600 text-white mt-3">Explore</button>
            </div>
        </div>
    );
};

export default Banner;