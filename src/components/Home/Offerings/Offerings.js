import React, { useEffect, useState } from 'react';
import Offering from './Offering/Offering';

const Offerings = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://vast-tor-48150.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])

    return (
        <div className="px-20 py-6">
            <h1 className="text-4xl font-medium text-center">Great Deals</h1>
            {
                packages.length !== 0 ? <div className="mt-10 grid grid-cols-3 gap-8">
                    {
                        packages.map(pckg => <Offering key={pckg._id} package={pckg}></Offering>)
                    }
                </div> :
                    <p className="text-center py-10 text-2xl font-medium">Loading...</p>
            }

        </div>
    );
};

export default Offerings;