import React from 'react';
import Banner from '../Banner/Banner';
import Offerings from '../Offerings/Offerings';
import ValueProposition from '../ValueProposition/ValueProposition';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="py-8 border-b border-gray-300">
                <ValueProposition></ValueProposition>
            </div>
            <Offerings></Offerings>
        </div>
    );
};

export default Home;