import React from 'react';
import useFetchData from '../../hooks/useFetchData';
import PackageItem from './PackageItem/PackageItem';

const Packages = () => {
    const { packages, loading } = useFetchData();
    return (
        <div className="min-h-screen mt-16">
            <div className=" bg-blue-300 py-10">
                <h2 className=" text-3xl font-bold text-center text-gray-800">All Packages</h2>
            </div>
            {
                !loading ?
                    <div className="py-10 px-20 grid grid-cols-3 gap-5">
                        {
                            packages.map(packageItem => <PackageItem key={packageItem._id} packageItem={packageItem}></PackageItem>)
                        }
                    </div> :
                    <p className="text-center py-10 text-2xl font-medium">Loading...</p>
            }
        </div>
    );
};

export default Packages;