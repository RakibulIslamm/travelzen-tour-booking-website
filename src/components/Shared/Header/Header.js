import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";
import UserDropDown from '../UserDropDown/UserDropDown';

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const { user, isLoading } = useAuth();

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className="flex justify-between items-center h-16 lg:px-20 md:px-20 sm:px-10 xs:px-6">
            <div className="flex items-center gap-14">
                <Link to="/">
                    <h1 className="text-2xl uppercase text-white font-extralight tracking-widest">Travelzen</h1>
                </Link>
                <nav className="space-x-8 text-white font-light text-base tracking-wide sm:hidden xs:hidden">
                    <Link to="/home">Home</Link>
                    <Link to="/packages">Packages</Link>
                    {
                        user && <Link to="/my-booked">My Booked</Link>
                    }
                </nav>
            </div>
            <div className="flex items-center gap-14">
                {
                    user && <div className="space-x-8 text-white font-light text-base tracking-wide md:hidden sm:hidden xs:hidden">
                        <Link to="/all-booked">Manage All Booked</Link>
                        <Link to="/add-package">Add A New Package</Link>
                    </div>
                }
                {
                    isLoading ? <div className="flex items-center">Loading...</div> : <div className="flex items-center">
                        {
                            !user ? <Link to="/login">
                                <button className="px-8 py-2 bg-yellow-600 text-white">Login</button>
                            </Link> :
                                <button onClick={handleToggle}>
                                    <img className="w-8 rounded-full" src={`${user.photoURL}`} alt="" />
                                </button>
                        }
                    </div>
                }

                <UserDropDown toggle={toggle} setToggle={setToggle}></UserDropDown>
            </div>
        </div>
    );
};

export default Header;