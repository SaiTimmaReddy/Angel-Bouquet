import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../reducks/users/operations';

import Home from '../containers/Home';
import { push } from 'connected-react-router';

const SignUp = () => {
    const dispatch = useDispatch();

    const closeButton = () => {
        dispatch(push('/'));
    };
    const [user_name, setUserName] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState('');
    const inputUserName = event => {
        setUserName(event.target.value);
    };
    const inputEmail = event => {
        setEmail(event.target.value);
    };
    const inputPassword = event => {
        setPassword(event.target.value);
    };
    const signUpButton = () => {
        dispatch(signUp(user_name, email, password));
        setUserName('');
        setEmail('');
        setPassword('');
    };
    return (
        <div>
            <div class="transparent">
                <Home />
            </div>
            <div class="signup-box">
                <h2 class="cancelbtn" onClick={closeButton}>
                    X
                </h2>
                <p class="cybe">Angel Bouquet</p>
                <h1 class="signnn">SIGN UP</h1>
                <form>
                    <input type="text" onChange={inputUserName} placeholder="User Name" value={user_name} required />
                    <br />
                    <br />

                    <input type="email" onChange={inputEmail} placeholder="Enter email" value={email} required />
                    <br />
                    <br />

                    <input type="password" onChange={inputPassword} placeholder="Password" value={password} required />
                    <br />

                    <input type="button" value="SignUp" onClick={signUpButton} />
                </form>
                <p class="alredy">
                    {' '}
                    Already a Member? <a href="/signin">Sign In</a>{' '}
                </p>{' '}
            </div>
        </div>
    );
};

export default SignUp;
