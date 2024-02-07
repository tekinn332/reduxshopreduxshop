import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/slices/cartSlice';
import { BsCart3 } from "react-icons/bs";

const Header = () => {

    const { cartItems } = useSelector((state) => state.cart);

    const dispatch = useDispatch();


    const handleOpenCart = (open) => {
        dispatch(toggleCart(open));
    };


    const cartQuantity = cartItems.length;


    return (
        <>
            <header id="header">
                <div >
                    <div>
                        <h4>Redux Shopping Cart</h4>
                        <div >
                            <div
                                title="Cart"
                      
                                onClick={() => handleOpenCart(true)}
                            >
                                <BsCart3 style={{cursor:"pointer"}}/>
                                <span>{cartQuantity}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;