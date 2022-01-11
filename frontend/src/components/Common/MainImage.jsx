import React, { useState } from 'react';
import backgroundimage from '../../assets/img/background.png';
import cartimage from '../../assets/img/cart.png';

const MainImage = () => {
    const [checkUser, setCheckUser] = useState(false);
    return (
        <div>
            <section class="background">
                <div class="background-image">
                    <img src={backgroundimage} />
                    <h1>
                        Bouquet Angel
                        <br />
                        For
                        <br />
                        your loved one
                    </h1>
                </div>
            </section>
            {checkUser && (
                <div class="cartpic">
                    <a href="/cart">
                        {' '}
                        <img class="cartt " src={cartimage} alt="this is a cart" />{' '}
                    </a>
                </div>
            )}
        </div>
    );
};

export default MainImage;
