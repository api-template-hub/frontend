import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBasket,
  faBars,
  faSearch,
  faShoppingCart,
  faUser,
  faTruck,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import SearchForm from './SearchForm';
import OrderButton from './Order';
import EnquiryForm from './EnquiryForm';
import ShoppingCart from './ShoppingCart';
import UserForm from './UserForm';
import './Header.css';
import Navbar from './Navbar';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeEnquiry, setActiveEnquiry] = useState(false);
  const [activeOrder, setActiveOrder] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeShoppingCart, setActiveShoppingCart] = useState(false);
  const [activeUserForm, setActiveUserForm] = useState(false);
  window.onscroll = () => {
    setActiveMenu(false);
    setActiveEnquiry(false);
    setActiveOrder(false);
    setActiveSearch(false);
    setActiveShoppingCart(false);
    setActiveUserForm(false);
  };
  const handleMenuButton = () => {
    setActiveMenu(!activeMenu);
    setActiveEnquiry(false);
    setActiveOrder(false);
    setActiveSearch(false);
    setActiveShoppingCart(false);
    setActiveUserForm(false);
  };
  const handleEnquiryButton = () => {
    setActiveMenu(false);
    setActiveEnquiry(!activeEnquiry);
    setActiveOrder(false);
    setActiveSearch(false);
    setActiveShoppingCart(false);
    setActiveUserForm(false);
  };
  const handleOrderButton = () => {
    setActiveMenu(false);
    setActiveEnquiry(false);
    setActiveOrder(!activeOrder);
    setActiveSearch(false);
    setActiveShoppingCart(false);
    setActiveUserForm(false);
  };
  const handleSearchButton = () => {
    setActiveMenu(false);
    setActiveEnquiry(false);
    setActiveOrder(false);
    setActiveSearch(!activeSearch);
    setActiveShoppingCart(false);
    setActiveUserForm(false);
  };
  const handleShoppingCartButton = () => {
    setActiveMenu(false);
    setActiveEnquiry(false);
    setActiveOrder(false);
    setActiveSearch(false);
    setActiveShoppingCart(!activeShoppingCart);
    setActiveUserForm(false);
  };
  const handleUserFormButton = () => {
    setActiveMenu(false);
    setActiveEnquiry(false);
    setActiveOrder(false);
    setActiveSearch(false);
    setActiveShoppingCart(false);
    setActiveUserForm(!activeUserForm);
  };
  return (
    <header className="header">
      <a href="/" className="logo">
        <i>
          <FontAwesomeIcon icon={faShoppingBasket} />
        </i>
        fresh-n-fast
      </a>
      <Navbar active={activeMenu} />
      <div className="icons">
        <button type="button" id="menu-btn" onClick={handleMenuButton}>
          <FontAwesomeIcon className="fa-icon" icon={faBars} />
        </button>
        <button type="button" id="truck-btn" onClick={handleEnquiryButton}>
          <FontAwesomeIcon className="fa-icon" icon={faQuestionCircle} />
        </button>
        <button type="button" id="truck-btn" onClick={handleOrderButton}>
          <FontAwesomeIcon className="fa-icon" icon={faTruck} />
        </button>
        <button type="button" id="search-btn" onClick={handleSearchButton}>
          <FontAwesomeIcon className="fa-icon" icon={faSearch} />
        </button>
        <button type="button" id="cart-btn" onClick={handleShoppingCartButton}>
          <FontAwesomeIcon className="fa-icon" icon={faShoppingCart} />
        </button>
        <button type="button" id="user-btn" onClick={handleUserFormButton}>
          <FontAwesomeIcon className="fa-icon" icon={faUser} />
        </button>
      </div>
      <OrderButton active={activeOrder} />
      <SearchForm active={activeSearch} />
      <EnquiryForm active={activeEnquiry} />
      <ShoppingCart active={activeShoppingCart} />
      <UserForm active={activeUserForm} />
    </header>
  );
}
