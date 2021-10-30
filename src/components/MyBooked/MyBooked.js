import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyBooked = () => {
    const [myBooked, setMyBooked] = useState([]);
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
    }, []);


    return (
        <div className="min-h-screen flex items-center px-20 py-20">
            my book has {myBooked.length}
        </div>
    );
};

export default MyBooked;