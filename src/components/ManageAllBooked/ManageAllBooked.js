import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import BookedItem from './BookedItem.js/BookedItem';

const ManageAllBooked = () => {
    const [allBooked, setAllBooked] = useState([]);
    const [updatedBook, setUpdatedBook] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/all-booked')
            .then(res => res.json())
            .then(data => {
                setAllBooked(data);
            })
            .catch(error => console.log(error))
    }, [updatedBook]);

    const handleApprove = (id) => {
        const booked = allBooked.find(booked => booked._id === id);
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
                    const rest = allBooked.filter(booked => booked._id === id);
                    setUpdatedBook(rest);
                }
                console.log(data);
            })
    };

    // Handle Delete
    const handleDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/all-booked/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const rest = allBooked.filter(booked => booked._id !== id);
                    setAllBooked(rest);
                    alert('Deleted');
                }
            })
            .catch(error => console.log(error))
    }


    return (
        <div className="min-h-screen justify-center flex items-center px-20 py-20">
            <div>
                <h2 className="text-3xl font-semibold py-8 text-center">My Booking List</h2>
                <div className="grid grid-cols-2 gap-4">

                    {
                        allBooked.map(bookedItem => <BookedItem key={bookedItem._id} bookedItem={bookedItem} handleApprove={handleApprove} handleDelete={handleDelete}></BookedItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageAllBooked;