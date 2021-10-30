import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";

const Header = () => {

    const { user, isLoading } = useAuth();


    return (
        <div className="flex justify-between items-center h-16 px-20">
            <div className="flex items-center gap-14">
                <Link to="/">
                    <h1 className="text-2xl uppercase text-white font-extralight tracking-widest">Travelzen</h1>
                </Link>
                <nav className="space-x-8 text-white font-light text-base tracking-wide">
                    <Link to="/home">Home</Link>
                    <Link to="/packages">Packages</Link>
                    <Link to="/destination">Destination</Link>
                    {
                        user && <Link to="/my-booked">My Booked</Link>
                    }
                </nav>
            </div>
            <div className="flex items-center gap-14">
                {
                    user && <div className="space-x-8 text-white font-light text-base tracking-wide">
                        <Link to="/manage-all-booked">Manage All Booked</Link>
                        <Link to="/add-package">Add A New Package</Link>
                    </div>
                }
                {
                    isLoading ? <div className="flex items-center">Loading...</div> : <div className="flex items-center">
                        {
                            !user ? <Link to="/login">
                                <button className="px-8 py-2 bg-yellow-600 text-white">Login</button>
                            </Link> :
                                <button>
                                    <img className="w-8 rounded-full" src={`${user.photoURL}`} alt="" />
                                </button>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;