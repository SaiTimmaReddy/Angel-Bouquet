import React, { useEffect, useState } from 'react';

export default function Footer({ price }) {
    let pageUrl = window.location.toString();
    const [showCheckoutButton, setShowCheckoutButton] = useState(true);
    const key = localStorage.getItem('LOGIN_USER_KEY');

    useEffect(() => {
        if (pageUrl.includes('cart')) {
            setShowCheckoutButton(false);
        }
    }, []);

    return (
        <>
            <div class="footer">
                {key !== null && (
                    <div class="total">
                        <h1>Subtotal: ${price}</h1>
                        {showCheckoutButton ? (
                            <a href="/cart">
                                {' '}
                                <button class="checkcart">Check Your Cart</button>
                            </a>
                        ) : (
                            <a href="/shipping">
                                <button class="checkcart">Checkout</button>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
