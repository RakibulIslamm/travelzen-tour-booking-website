import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div className="h-screen flex justify-center items-center">
            <h2 className="text-lg font-normal">Loading...</h2>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? children :
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
            }
        />
    );
};

export default PrivateRoute;