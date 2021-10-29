import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Offerings from '../Offerings/Offerings';
import ValueProposition from '../ValueProposition/ValueProposition';

const Home = () => {
    return (
        <div>
            <div className="absolute w-full top-0 left-0 z-10 bg-black bg-opacity-25">
                <Header></Header>
            </div>
            <Banner></Banner>
            <div className="py-8 border-b border-gray-300">
                <ValueProposition></ValueProposition>
            </div>
            <Offerings></Offerings>
        </div>
    );
};

export default Home;