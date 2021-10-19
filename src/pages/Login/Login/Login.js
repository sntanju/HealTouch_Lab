import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle} = useAuth();
    return (
        <div>
            <button onClick={signInUsingGoogle} className="detail-btn">Google Sign in</button>
        </div>
    );
};

export default Login;