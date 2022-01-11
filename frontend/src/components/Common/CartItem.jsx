import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, increaseCart, decreaseCart } from '../../reducks/carts/operations';
import { getCarts, getSubtotal } from '../../reducks/carts/selectors';

const CartItem = ({ cart, quantity, cartId }) => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const subtotal = getSubtotal(selector);

    const clickPlusCart = () => {
        dispatch(increaseCart(cartId));
    };
    const clickMinusCart = () => {
        dispatch(decreaseCart(cartId));
    };

    useEffect(() => {
        console.log(cart.image);
        console.log(cart);
        console.log(carts);
    }, []);

    return (
        <>
            <div class="flower1">
                <img src={'https://res.cloudinary.com/www-techis-io/' + cart.image} class="flowerimage" alt="" />
            </div>

            <div class="carttext">
                <h5 class="text1">{cart.name}</h5>

                <div class="cost1"> ${cart.price}</div>
                <div class="Add">
                    <span class="minus" onClick={clickMinusCart}>
                        -
                    </span>
                    <span class="count">{quantity}</span>
                    <span class="plus" onClick={clickPlusCart}>
                        +
                    </span>
                </div>
            </div>
        </>
    );
};

export default CartItem;
