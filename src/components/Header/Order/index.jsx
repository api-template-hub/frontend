// Orders
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function ShoppingCart(props) {
  const { active } = props;
  return (
    <div className={`shopping-cart ${active ? 'active' : ''}`}>
      <div><h1>Orders</h1></div>
      <div className="box">
        <FontAwesomeIcon className="trash-icon" icon={faCheck} />
        <img src="image/cart-img-1.png" alt="Product" />
        <div className="content">
          <h3>watermelon</h3>
          <span className="price">Out For Delivery</span>
          <br />
          <span className="quantity">Qty: 1</span>
        </div>
      </div>
      <div className="box">
        <FontAwesomeIcon className="trash-icon" icon={faCheck} />
        <img src="image/cart-img-2.png" alt="Product" />
        <div className="content">
          <h3>onion</h3>
          <span className="price">Order Placed</span>
          <br />
          <span className="quantity">Qty: 1</span>
        </div>
      </div>
      <div className="box">
        <FontAwesomeIcon className="trash-icon" icon={faCheck} />
        <img src="image/cart-img-3.png" alt="Product" />
        <div className="content">
          <h3>chicken</h3>
          <span className="price">Order Placed</span>
          <br />
          <span className="quantity">qty: 1</span>
        </div>
      </div>
    </div>
  );
}
ShoppingCart.propTypes = {
  activeShoppingCart: PropTypes.bool,
}.isRequired;
