import React from 'react';

const Destination = (props) => {

    const { img, name } = props.destination

    return (
        <div style={{
            backgroundImage: `linear-gradient(45deg, rgba(0, 1, 46, .8), rgba(1, 2, 82, .7)),url(${img})`,
        }} className="shadow border border-gray-300 bg-center bg-cover bg-no-repeat h-80 flex justify-center items-center transform hover:scale-105 transition-all duration-200 cursor-pointer">
            <h2 className="text-2xl text-white font-semibold">{name}</h2>
        </div>
    );
};

export default Destination;