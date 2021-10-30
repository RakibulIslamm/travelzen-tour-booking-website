import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const [singlePackage, setSinglePackage] = useState({})
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    const { user } = useAuth();
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5000/package/${id}`)
            .then(res => res.json())
            .then(data => {
                setSinglePackage(data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const onSubmit = (data) => {
        data.status = false;
        data.booked_tour = singlePackage.title;
        data.booked_id = singlePackage._id;
        data.tour_img = singlePackage.img;

        fetch(`https://vast-tor-48150.herokuapp.com/bookings`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Booked Successfully');
                    reset();
                    history.push('/my-booked');

                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="min-h-screen py-20 pb-20 flex justify-center items-center flex-col px-20">
            <div className="w-full h-32 bg-cover bg-center">
                <h1 className="text-3xl font-semibold py-5 w-6/12 text-center mx-auto">Book - {singlePackage.title}</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Name
                        </label>
                        <input {...register('name', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" value={user.displayName} readOnly placeholder="Your Name" />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Email
                        </label>
                        <input {...register('email', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" value={user.email} readOnly placeholder="Your Email" />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Departure Date AND Time
                        </label>
                        <input {...register('departure')} value={singlePackage?.departure || ''} readOnly className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="datetime-local" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Return Date AND Time
                        </label>
                        <input {...register('return')} value={singlePackage?.return || ''} readOnly className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="datetime-local" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Phone
                        </label>
                        <input {...register('phone', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Phone" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Address
                        </label>
                        <input {...register('address', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Address" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Pickup Address
                        </label>
                        <input {...register('pikup_address', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Pickup Address" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Notes
                        </label>
                        <textarea {...register('notes')} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Write a note" />
                    </div>
                </div>
                <input className="px-12 py-3 rounded bg-yellow-600 text-white" type="submit" value="Book" />
            </form>
        </div>
    );
};

export default Booking;