import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import Offerings from '../Offerings/Offerings';
import Subscribe from '../Subscribe/Subscribe';
import ValueProposition from '../ValueProposition/ValueProposition';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="py-8 border-b border-gray-300">
                <ValueProposition></ValueProposition>
            </div>
            <Offerings></Offerings>
            <Destinations></Destinations>
            <div className="mt-5">
                <Subscribe></Subscribe>
            </div>
        </div>
    );
};

export default Home;