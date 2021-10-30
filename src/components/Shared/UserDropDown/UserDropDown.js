import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const UserDropDown = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>{user.displayName}</h1>
            <Link></Link>
        </div>
    );
};

export default UserDropDown;