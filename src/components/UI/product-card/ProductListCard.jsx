// ProductListCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import "../../../styles/product-list.css";

const ProductListCard = (props) => {
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
    <div className="product-list-card card">
  <div className="row align-items-center">
    <div className="col-md-6">
      <div className="card-body">
        <h3 className="card-title">
          <Link to={`/burgers/${id}`}>{title}</Link>
        </h3>
        <p className="product-details card-text">
          {/* Add your product details here */}
          This is a brief description of the product.
        </p>
        <span className="product-card-price card-text">Rs {price}</span>
        <button
          className="add-to-cart-btn btn btn-primary"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
    <div className="col-md-6">
      <img src={image01} alt="product-img" className="card-img-list" />
    </div>
  </div>
</div>

  );
};

export default ProductListCard;
