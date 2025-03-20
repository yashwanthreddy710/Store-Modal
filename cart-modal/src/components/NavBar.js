import React from 'react';
import './NavBar.css';

const NavBar = ({ cart, openCart }) => {
  return (
    <nav className="navbar">
      <div className="name">Product Store</div>
      <button className="cart-button" onClick={openCart}>Cart ({cart.length})</button>
    </nav>
  );
};

export default NavBar;
