import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Booked from './Booked/Booked';

const MyBooked = () => {
    const [loading, setLoading] = useState(true);
    const [myBooked, setMyBooked] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://vast-tor-48150.herokuapp.com/my-booked', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify([user.email])
        })
            .then(res => res.json())
            .then(data => {
                setMyBooked(data);
                setLoading(false);
            })
            .catch(error => console.log(error));

    }, []);

    const handleDelete = id => {
        const progress = window.confirm('Are you sure you want DELETE?');
        if (progress) {
            fetch(`https://vast-tor-48150.herokuapp.com/all-booked/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const rest = myBooked.filter(booked => booked._id !== id);
                        setMyBooked(rest);
                        alert('Deleted');
                    }
                })
                .catch(error => console.log(error))
        }
    }


    return (
        <div className="min-h-screen justify-center flex items-center px-20 sm:px-10 xs:px-5 py-20">
            <div>
                <h2 className="text-3xl font-semibold py-8 text-center">My Booking List</h2>
                <div className="flex justify-center items-center">

                    {
                        loading ? "Loading..." :
                            !myBooked.length ? <p className="text-xl text-gray-600 font-semibold block">You have no booked</p> : <div className="grid lg:grid-cols-2 gap-4">
                                {myBooked.map(bookedItem => <Booked key={bookedItem._id} bookedItem={bookedItem} handleDelete={handleDelete}></Booked>)}
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyBooked;