import React from 'react';
import { BsTrash, BsHourglassSplit, BsPersonCheck } from 'react-icons/bs'

const Booked = (props) => {
    // console.log(props.bookedItem);
    const { booked_tour, departure, tour_img, status, _id } = props.bookedItem;
    const { handleDelete } = props;

    return (
        <div className="flex justify-between items-center gap-4 border border-gray-200 shadow">
            <img className="w-40 h-40 sm:w-32 sm:h-32 xs:h-32 xs:w-32 object-cover" src={tour_img} alt="" />
            <div className="flex justify-between gap-4">
                <div className="sm:text-sm xs:text-xs">
                    <h2 className="text-lg sm:text-sm xs:text-xs font-semibold">{booked_tour}</h2>
                    <p><b>Departure</b>: {departure && departure.slice(0, 10)}  {departure && departure.slice(-5)}</p>
                    {
                        !status ?
                            <p className="flex items-center gap-2 text-red-600"><BsHourglassSplit /><b>Pending</b></p> :
                            <p className="flex items-center gap-2 text-green-600"><BsPersonCheck />Approved</p>
                    }
                </div>
            </div>
            <button onClick={() => handleDelete(_id)} className="px-6 xs:px-2 h-40 sm:h-32 xs:h-32 flex justify-center items-center bg-red-600 hover:opacity-90"><BsTrash className="text-2xl text-white hover:text-yellow-400" /></button>
        </div>
    );
};

export default Booked;