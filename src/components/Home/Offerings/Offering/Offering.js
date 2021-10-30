import React from 'react';
import { CalendarIcon, UserGroupIcon, CurrencyBangladeshiIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';

const Offering = (props) => {
    // console.log(props.package);
    const { img, title, duration, cost, overview, group_size, _id } = props.package
    return (
        <div>
            <div className="shadow rounded-xl border border-gray-200">
                <img className="rounded-t-xl h-60 w-full object-cover" src={img} alt="" />
                <div className="p-4 h-72 flex flex-col justify-between">
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <p>{overview.slice(0, 80)}....</p>
                    <hr className="mt-4" />
                    <div className="flex justify-between items-center py-3">
                        <div className="flex items-center gap-3 text-gray-500">
                            <CalendarIcon className="w-6" />
                            <p>{duration}</p>
                        </div>
                        <div className="flex items-center gap-3 text-gray-500">
                            <UserGroupIcon className="w-6" />
                            <p>{group_size} person</p>
                        </div>
                    </div>
                    <hr className="mb-4" />
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 text-gray-500">
                            <CurrencyBangladeshiIcon className="w-6" />
                            <p>{cost}</p>
                        </div>
                        <div className="flex items-center gap-3 text-gray-500">
                            <Link to={`/booking/${_id}`}>
                                <button className="px-6 py-2 bg-yellow-600 text-white">Book Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offering;