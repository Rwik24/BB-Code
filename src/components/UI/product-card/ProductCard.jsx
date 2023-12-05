import React from "react";
import "../../../styles/product-card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className="product-card card">
      <img src={image01} alt="product-img" className="card-img-top" />

      <div className="card-body">
        <h3 className="card-title">
          <Link to={`/burgers/${id}`}>{title}</Link>
        </h3>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product-card-price card-text">Rs {price}</span>
          <button className="add-to-cart-btn btn btn-primary" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
