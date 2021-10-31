import React, { useEffect, useState } from 'react';
import BookedItem from './BookedItem.js/BookedItem';

const ManageAllBooked = () => {
    const [allBooked, setAllBooked] = useState([]);
    const [updatedBook, setUpdatedBook] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://vast-tor-48150.herokuapp.com/all-booked')
            .then(res => res.json())
            .then(data => {
                setAllBooked(data);
                setLoading(false)
            })
            .catch(error => console.log(error));
    }, [updatedBook]);

    const handleApprove = (id) => {
        const booked = allBooked.find(booked => booked._id === id);
        const url = `https://vast-tor-48150.herokuapp.com/my-booked/${id}`
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
                    const updatedItem = allBooked.filter(booked => booked._id === id);
                    setUpdatedBook(updatedItem);
                }
                console.log(data);
            })
    };

    // Handle Delete
    const handleDelete = id => {
        const progress = window.confirm('Are you sure you want DELETE?');
        if (progress) {
            fetch(`https://vast-tor-48150.herokuapp.com/all-booked/${id}`, {
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
    }


    return (
        <div className="min-h-screen justify-center flex items-center px-20 sm:px-10 xs:px-5 py-20">
            <div>
                <h2 className="text-3xl font-semibold py-8 text-center">Manage All Booking List</h2>
                <div className="grid lg:grid-cols-2 gap-4">

                    {
                        loading ? 'Loading....' :
                            allBooked.map(bookedItem => <BookedItem key={bookedItem._id} bookedItem={bookedItem} handleApprove={handleApprove} handleDelete={handleDelete}></BookedItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageAllBooked;