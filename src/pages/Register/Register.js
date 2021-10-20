import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Register.css';

const Register = () => {

    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [login, setLogin] = useState(false);

    const toggleLogin = (e) => {
        setLogin(e.target.checked);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
       setPassword(e.target.value);
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        console.log(email, password);

        if (password.length < 6) {
            setError('Password Cant be Less Than 6 Characters.')
            return;
        }

        login ? processLogin(email, password) : createNewUser(email, password);
    }

        const processLogin = (email, password) => {
            signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');

            })
            .catch(error => {
                setError(error.message);
            })
        }

       const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('')
        })
        .catch(error => {
            setError(error.message);
        })
       }
        

    return (
        <div className="register">
            <form onSubmit={handleRegistration}>
                <h3>Please { login ? 'Login' : 'Register' }</h3>
                <br />
                <label htmlFor="email">Email:</label>
                <input onBlur={handleEmailChange} type="text" name="email" required />
                <br />
                <br />
                <label htmlFor="password">Password:</label>
                <input onBlur={handlePasswordChange} type="password" name="password" required/>
                <br />
                <br />
                <input onChange={toggleLogin} type="checkbox" name="checkbox" id="" />
                <label htmlFor="checkbox">Already Registered?</label>
                <br />
                <h5>{error}</h5>
                <button className="detail-btn">{login ? 'Login' : 'Register'} </button>
                <br /><br />
                
            </form>
        </div>
    );
};

export default Register;