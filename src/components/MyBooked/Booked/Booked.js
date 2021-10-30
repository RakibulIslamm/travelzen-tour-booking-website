import React from 'react';
import { BsTrash } from 'react-icons/bs'

const Booked = (props) => {
    // console.log(props.bookedItem);
    const { booked_tour, departure, tour_img, _id } = props.bookedItem;
    console.log(props.bookedItem);

    return (
        <div className="flex justify-between items-center gap-4 border border-gray-200 shadow">
            <img className="w-40 h-40 object-cover" src={tour_img} alt="" />
            <div className="flex justify-between gap-4">
                <div>
                    <h2 className="text-lg font-semibold">{booked_tour}</h2>
                    <p><b>Departure</b>: {departure && departure.slice(0, 9)} {departure && departure.slice(-5)}</p>

                </div>
            </div>
            <button className="px-6 h-40 flex justify-center items-center bg-red-600 hover:opacity-90"><BsTrash className="text-2xl text-white hover:text-yellow-400" /></button>
        </div>
    );
};

export default Booked;