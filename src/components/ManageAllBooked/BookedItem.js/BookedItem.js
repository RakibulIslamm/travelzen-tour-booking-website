import React from 'react';
import { BsHourglassSplit, BsPersonCheck, BsTrash } from 'react-icons/bs'
// import img from '../../../images/Sundarbans-tiger.jpg'

const BookedItem = (props) => {
    // console.log(props.bookedItem);
    const { tour_img, booked_tour, status, _id, email, phone } = props.bookedItem;
    const { handleApprove, handleDelete } = props;

    return (
        <div className="flex justify-start items-center gap-4 border xs:w-full border-gray-200 shadow">
            <img className="w-48 h-48 sm:w-32 sm:h-32 xs:hidden object-cover" src={tour_img} alt="" />
            <div className="flex justify-between items-center gap-4">
                <div className="xs:p-2">
                    <h2 className="text-lg sm:text-sm xs:text-xs font-semibold">{booked_tour}</h2>
                    <div className="text-sm">
                        <p className="xs:hidden">Email: {email}</p>
                        <p>Phone: {phone}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 xs:mt-0">
                        {
                            !status ?
                                <p className="flex items-center gap-2 text-red-600"><BsHourglassSplit /><b>Pending</b></p> :
                                <p className="flex items-center gap-2 text-green-600"><BsPersonCheck />Approved</p>
                        }
                        {
                            !status && <button onClick={() => handleApprove(_id)} className="bg-green-500 text-white px-4 py-1 xs:px-2 xs:text-xs rounded  focus:opacity-80">Approve</button>
                        }
                    </div>
                </div>
            </div>
            <button onClick={() => handleDelete(_id)} className="px-6 ml-auto xs:px-2 h-48 sm:h-32 xs:h-24 flex justify-center items-center bg-red-600 hover:opacity-90"><BsTrash className="text-2xl text-white hover:text-yellow-400" /></button>
        </div>
    );
};

export default BookedItem;