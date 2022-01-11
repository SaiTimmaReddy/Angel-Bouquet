// import React from 'react';
// import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../reducks/users/selectors';
const Thankyou = () => {
    const selector = useSelector(state => state);
    const user = JSON.parse(localStorage.getItem('LOGIN_USER_KEY'));
    useEffect(() => {
        console.log(user);
    }, []);
    return (
        <div>
            <div class="orderitms">
                <h1 class="dismsg">- Thank you for yours ordering -</h1>
            </div>
            <div class="thankyoumsg">
                <h2 class="thankmsg">
                    Thank you for your ordering {user.user_name}. We received your request. Our staff will be contacting
                    with you to tell next steps.
                </h2>
                <a href="/">
                    <button type="submit" class="homebtn">
                        Back To Home
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Thankyou;
