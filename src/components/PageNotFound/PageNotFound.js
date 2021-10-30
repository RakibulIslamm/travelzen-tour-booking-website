import React from 'react';
import { useHistory } from 'react-router';
import error404Img from '../../images/404 Error with a cute animal-amico.svg'

const PageNotFound = () => {
    const history = useHistory();

    const handleGoHome = () => {
        history.push('/');
    }

    return (
        <div className="py-20 h-screen flex justify-center items-center">
            <div>
                <img className="w-full xs:w-60" src={error404Img} alt="" />
                <button onClick={handleGoHome} className="block mx-auto px-8 py-2 bg-blue-600 rounded text-white">{'<< '}Go Home</button>
            </div>
        </div>
    );
};

export default PageNotFound;