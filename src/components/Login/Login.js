import { signOut } from '@firebase/auth';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { user, setUser, error, setError, googleSignIn, isLoading, logOut } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const uri = location.state?.from || '/'

    if (isLoading) {
        return <div className="h-screen flex justify-center items-center">
            <h2 className="text-lg font-normal">Loading...</h2>
        </div>
    }

    // Google Sign In
    const handleGoogleSignIn = () => {
        setError('')
        googleSignIn()
            .then(result => {
                setUser(result.user);
                history.push(uri);
            })
            .catch(error => {
                console.log(error.code);
            })
    }

    // Logout
    const handleLogOut = () => {
        logOut()
            .then(() => {
                setUser('');
                history.push('/login')
            })
    }




    return (
        <>
            {
                !user ? <div className="flex justify-center items-center flex-col gap-5 h-screen py-20">
                    <h1 className="text-3xl font-semibold">Sign In With Google</h1>
                    <p>{error}</p>
                    <button onClick={handleGoogleSignIn} className="px-20 py-5 rounded-full border border-gray-300 flex items-center gap-5 hover:bg-gray-100 transition-all duration-200">
                        <img className="w-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" />
                        Google Sign In</button>
                </div> : <div className="flex justify-center items-center flex-col gap-5 h-screen">
                    <p>Hey {user.displayName}, You already logged in</p>
                    <button onClick={handleLogOut} className="font-semibold">Logout{'>>'}</button>
                </div>
            }
        </>
    );
};

export default Login;