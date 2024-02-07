import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlice";
import "../css.css"; 

const ProductsCard = (props) => {
  const { img, rating, title, price } = props;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = { ...props };
    dispatch(addItem(item));
  };

  return (
    <div className="products-card">
      <img className="product-image" src={img} alt="product1" />
      <p>{rating}</p>
      <h4>{title}</h4>
      <h3>₹ {price.toLocaleString()}</h3>
      <button type="button" onClick={handleAddToCart}>
        Add
      </button>
    </div>
  );
};

export default ProductsCard;
