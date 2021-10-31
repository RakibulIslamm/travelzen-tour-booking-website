import React from 'react';
import useFetchData from '../../../hooks/useFetchData';
import Destination from './Destination/Destination';

const Destinations = () => {

    const { destinations, loading } = useFetchData();

    return (
        <div className="px-20 xs:px-5 sm:px-8 py-6">
            <h1 className="text-4xl font-medium text-center">Destinations</h1>
            {
                !loading ? <div className="mt-10 grid grid-cols-4 gap-5 sm:grid-cols-2 md:grid-cols-2 xs:grid-cols-1">
                    {
                        destinations.slice(0).reverse().map(destination => <Destination key={destination._id} destination={destination}></Destination>)
                    }
                </div> :
                    <p className="text-center py-10 text-2xl font-medium">Loading...</p>
            }
        </div>
    );
};

export default Destinations;