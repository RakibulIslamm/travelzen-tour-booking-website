import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { BsBoxArrowRight } from 'react-icons/bs'

const UserDropDown = ({ toggle, setToggle }) => {
    // console.log(toggle);
    const history = useHistory();
    const { user, setUser, logOut } = useAuth();


    // Logout
    const handleLogOut = () => {
        setToggle(false);
        logOut()
            .then(() => {
                setUser('');
                history.push('/')
            })
    }


    return (
        <>
            {
                user && <div className={`absolute top-16 right-5 w-48 bg-blue-900 opacity-80 z-20 ${toggle ? 'h-52 overflow-hidden border border-blue-400' : 'p-0 h-0 overflow-hidden'} transition-all duration-200`}>
                    <div className="w-full p-5 text-white">
                        <div className="border-b border-gray-300 flex justify-center items-start flex-col py-2">
                            <img className="w-10 h-10 rounded-full" src={user && user.photoURL} alt="" />
                            <h1 className=" text-base font-bold uppercase">{user && user.displayName}</h1>
                        </div>
                        <div className="py-2 border-b border-gray-300">
                            <Link onClick={() => setToggle(false)} to="/my-booked">My Booked</Link>
                        </div>
                        <button onClick={handleLogOut} className="mt-4 flex items-center gap-2 font-semibold"><BsBoxArrowRight className="text-xl" />Log Out</button>
                    </div>
                </div>
            }
        </>
    );
};

export default UserDropDown;