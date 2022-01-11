import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../reducks/users/operations';
import Home from '../containers/Home';
// import CrossX from '../assets/img/cross.png';
// import Melodium from '../assets/img/Melodium.svg';
import { push } from 'connected-react-router';

const Signin = () => {
    const dispatch = useDispatch();

    const closeButton = () => {
        dispatch(push('/'));
    };

    const [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    const inputEmail = event => {
        setEmail(event.target.value);
    };

    const inputPassword = event => {
        setPassword(event.target.value);
    };

    const signInButton = () => {
        dispatch(signIn(email, password));
        setEmail('');
        setPassword('');
    };
    return (
        <>
            <div class="transparent">
                <Home />
            </div>
            <div class="login-box">
                <h2 class="cancelbtn">
                    <a href="/" onClick={closeButton}>
                        X
                    </a>
                </h2>
                <p class="cybe">Angel Bouquet</p>

                <h1 class="signnnnn">SIGN IN</h1>
                <form class="loginnnn">
                    <input type="email" onChange={inputEmail} placeholder="Email Address" value={email} />
                    <br />
                    <br />

                    <input type="password" onChange={inputPassword} required placeholder="Password" vlaue={password} />

                    <input type="button" onClick={signInButton} value="JOIN US" />
                </form>
                <p class="signinp">
                    Not a Member?<a href="/signup">Sign Up</a>
                </p>
            </div>
        </>
    );
};

export default Signin;
