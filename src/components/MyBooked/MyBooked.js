import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Booked from './Booked/Booked';

const MyBooked = () => {
    const [myBooked, setMyBooked] = useState([]);
    const [updatedBook, setUpdatedBook] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/my-booked', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify([user.email])
        })
            .then(res => res.json())
            .then(data => {
                setMyBooked(data);
            })
            .catch(error => console.log(error))
    }, [updatedBook]);

    const handleApprove = (id) => {
        const booked = myBooked.find(booked => booked._id === id);
        const url = `http://localhost:5000/my-booked/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booked)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    const rest = myBooked.filter(booked => booked._id === id);
                    setUpdatedBook(rest);
                }
                console.log(data);
            })
    }


    return (
        <div className="min-h-screen justify-center flex items-center px-20 py-20">
            <div>
                <h2 className="text-3xl font-semibold py-8 text-center">My Booking List</h2>
                <div className="grid grid-cols-2 gap-4">

                    {
                        myBooked.map(bookedItem => <Booked key={bookedItem._id} bookedItem={bookedItem} handleApprove={handleApprove}></Booked>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyBooked;