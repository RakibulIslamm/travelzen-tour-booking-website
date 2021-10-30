import React from 'react';
import { CurrencyBangladeshiIcon, GlobeIcon, ShieldCheckIcon } from '@heroicons/react/solid'

const ValueProposition = () => {
    return (
        <div className="md:px-28 lg:px-40 sm:px-20 md:flex lg:flex sm:flex xs:space-y-10 justify-between">
            <div className="flex flex-col justify-center items-center gap-5">
                <CurrencyBangladeshiIcon className="w-20 sm:w-16 text-blue-400" />
                <h3 className="text-xl font-medium text-gray-500 sm:text-center">Best Price Guarantee</h3>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <ShieldCheckIcon className="w-20 sm:w-16 text-blue-400" />
                <h3 className="text-xl font-medium text-gray-500 sm:text-center">Trust & Safety</h3>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <GlobeIcon className="w-20 sm:w-16 text-blue-400" />
                <h3 className="text-xl font-medium text-gray-500 sm:text-center">20,000+ properties</h3>
            </div>
        </div>
    );
};

export default ValueProposition;