import React from 'react';
import { CurrencyBangladeshiIcon, GlobeIcon, ShieldCheckIcon } from '@heroicons/react/solid'

const ValueProposition = () => {
    return (
        <div className="px-40 flex justify-between">
            <div className="flex flex-col justify-center items-center gap-5">
                <CurrencyBangladeshiIcon className="w-20 text-blue-400" />
                <h3 className="text-xl font-medium text-gray-500">Best Price Guarantee</h3>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <ShieldCheckIcon className="w-20 text-blue-400" />
                <h3 className="text-xl font-medium text-gray-500">Trust & Safety</h3>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <GlobeIcon className="w-20 text-blue-400" />
                <h3 className="text-xl font-medium text-gray-500">20,000+ properties</h3>
            </div>
        </div>
    );
};

export default ValueProposition;