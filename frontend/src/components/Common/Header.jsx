import React, { useEffect, useState } from 'react';
import cartimage from '../../assets/img/cart.png';
import { signOut } from '../../reducks/users/operations';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

export default function Header() {
    const dispatch = useDispatch();
    const key = localStorage.getItem('LOGIN_USER_KEY');
    const [checkUser, setCheckUser] = useState(false);

    const signOutButton = () => {
        dispatch(signOut());
        setCheckUser(false);
        dispatch(push('/signin'));
    };

    useEffect(() => {
        if (key != null) {
            setCheckUser(true);
        }
    }, [key]);

    return (
        <>
            {checkUser && (
                <div class="cartpic">
                    <a class="bou" href="/cart">
                        <img class="cartt " src={cartimage} alt="this is a cart" />
                    </a>
                </div>
            )}
            <div class="Cyber">
                <p>
                    {' '}
                    <a class="bou" href="/">
                        {' '}
                        Bouquet Angel{' '}
                    </a>
                </p>
            </div>

            <div class="sign">
                <p class="sig">
                    {checkUser ? (
                        <div class="sig" onClick={signOutButton}>
                            Logout
                        </div>
                    ) : (
                        <div class="sign">
                            <p class="sig">
                                <a href="/signin" value="Sign In">
                                    SignIn
                                </a>
                            </p>
                        </div>
                    )}
                </p>
            </div>
        </>
    );
}
