import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, increaseCart, decreaseCart } from '../../reducks/carts/operations';
import { getCarts, getSubtotal } from '../../reducks/carts/selectors';
import { push } from 'connected-react-router';

const Item = ({ item }) => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const subtotal = getSubtotal(selector);
    const [particularCart, setParticularCart] = useState(null);
    const key = localStorage.getItem('LOGIN_USER_KEY');

    useEffect(() => {
        if (carts != undefined && carts.length > 0) {
            console.log('carts');
            console.log(carts);
            let matchedCarts = carts.filter(cart => cart.item.id == item.id);
            console.log('matchedCarts');
            console.log(matchedCarts);
            if (matchedCarts.length > 0) {
                setParticularCart(matchedCarts[0]);
            } else {
                setParticularCart(null);
            }
        }
    }, [subtotal]);

    const clickAddCart = () => {
        if (key) {
            dispatch(addCart(item));
        } else {
            dispatch(push('/signin'));
        }
    };
    const clickPlusCart = () => {
        dispatch(increaseCart(particularCart.id));
    };
    const clickMinusCart = () => {
        dispatch(decreaseCart(particularCart.id));
    };
    return (
        <div>
            <section class="subimages">
                <div class="flowerimages">
                    <ul>
                        <li>
                            <div class="flower1">
                                <img class="imgflower" src={item.image} />
                                <h2 class="text1">{item.name}</h2>
                                <h3 class="cost1">${item.price}</h3>
                                {particularCart && particularCart.quantity > 0 ? (
                                    <div class="Add">
                                        <span class="minus" onClick={clickMinusCart}>
                                            {' '}
                                            -
                                        </span>
                                        <span class="count">{particularCart.quantity}</span>
                                        <span class="plus" onClick={clickPlusCart}>
                                            {' '}
                                            +{' '}
                                        </span>
                                    </div>
                                ) : (
                                    <div>
                                        <button class="btn1" onClick={clickAddCart}>
                                            Add +
                                        </button>
                                    </div>
                                )}
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Item;
