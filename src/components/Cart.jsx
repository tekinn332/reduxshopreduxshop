import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCart,
  removeItem,
  incrementItem,
  decrementItem,
} from "../store/slices/cartSlice";
import ".././css.css"

const Cart = () => {
  const { isCartOpen, cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleCloseCart = (close) => {
    dispatch(toggleCart(close));
  };

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleIncrement = (itemId) => {
    dispatch(incrementItem(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementItem(itemId));
  };

  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  return (
    <>
    <div>
    {isCartOpen && (
        <div id="cart">
          <div >
            <div style={{border:"2px solid black"}} >
              <h2>
                Cart <small>({cartItems.length})</small>
              </h2>
              <div
                title="Close"
               
                onClick={() => handleCloseCart(false)}
              >
                <span><button>Hide</button></span>
              </div>
            </div>

            <div style={{border:"2px solid black"}}  >
              {cartItems.map((item) => (
                <div  key={item.id}>
                  <div >
                    <img className="product-image" src={item.img} alt="item"/>
                  </div>

                  <div >
                    <h4>{item.title}</h4>
                    <h3 className="price">₹ {item.price}</h3>
                  </div>

                  <div >
                    <span onClick={() => handleDecrement(item.id)}>-</span>
                    <b>{item.quantity}</b>
                    <span onClick={() => handleIncrement(item.id)}>+</span>
                  </div>

                  <div
                    title="Remove Item"
                
                    onClick={() => handleRemove(item.id)}
                  >
                    <span >Remove all</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{border:"2px solid black"}} >
              <h3>
                <p>Total:</p>
                <b>₹ {cartTotal.toLocaleString()}</b>
              </h3>

              <button 
                type="button"
         
                disabled={cartItems.length === 0}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
     
    </>
  );
};

export default Cart;
