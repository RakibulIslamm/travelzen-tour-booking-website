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

    console.log(singlePackage);


    useEffect(() => {
        try {
            async function fetchMyAPI() {
                let response = await fetch(`https://vast-tor-48150.herokuapp.com/package/${id}`)
                response = await response.json()
                setSinglePackage(response)
            }
            fetchMyAPI()
        }
        catch (error) {
            console.log(error);
        }

    }, []);

    const onSubmit = (data) => {
        data.status = false;
        data.booked_tour = singlePackage?.title;
        data.booked_id = singlePackage?._id;
        data.tour_img = singlePackage?.img;
        data.departure = singlePackage?.departure
            ;
        console.log(data);

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
        <div className="min-h-screen pt-16 pb-20">
            <div style={{
                backgroundImage: `linear-gradient(45deg, rgba(0, 1, 46, .8), rgba(1, 2, 82, .7)),url(${singlePackage.img})`,
            }} className="w-full bg-cover bg-center bg-no-repeat">
                <h1 className="text-3xl text-white xs:text-lg font-semibold py-10 xs:py-5 sm:w-full xs:w-full text-center mx-auto">{singlePackage.title}</h1>
            </div>
            <div className="w-full px-20 sm:px-10 xs:px-5 mt-8 flex items-start xs:flex-col sm:flex-col gap-5">
                <div className="w-6/12 sm:w-full xs:w-full p-5 flex justify-center items-start flex-col gap-3">
                    <p><b>Overview: </b>{singlePackage.overview}</p>
                    <p><b>Country:</b> {singlePackage.country}</p>
                    <p><b>Departure:</b> {singlePackage.departure}</p>
                    <p><b>Return:</b> {singlePackage.return}</p>
                    <p><b>Group Size:</b> {singlePackage.group_size}</p>
                    <p><b>Hotel:</b> {singlePackage.hotels}</p>
                    <p><b>Cost:</b> {singlePackage.cost}</p>
                    <h3 className="py-4 border-t border-gray-300 text-2xl font-bold">For more info, Contact us: <br /> {singlePackage.contact} </h3>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-6/12 sm:w-full xs:w-full p-5 shadow-xl border border-gray-300">
                    <h2 className="text-xl font-bold mb-6">Booking Now</h2>
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
                    <input className="px-12 py-3 rounded bg-yellow-600 text-white cursor-pointer focus:opacity-80" type="submit" value="Book" />
                </form>
            </div>
        </div>
    );
};

export default Booking;