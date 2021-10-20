import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle} = useAuth();
    
    return (
        <div className="register" >
            <h2>Please Sign In</h2>
            <br />
            <button onClick={signInUsingGoogle} className="detail-btn">Sign in With Google </button>
            <br /><br /><br />
            <h5>Don't have an account?</h5>
            <br />
            <NavLink style={{textDecoration:"none"}} className="detail-btn" to="/register">Sign up With Email</NavLink>
        </div>
    );
};

export default Login;