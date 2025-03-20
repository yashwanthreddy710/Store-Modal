import React from 'react';
import './CartModal.css';

const CartModal = ({ cart, removeFromCart, closeModal }) => {
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal')) {
          closeModal();
        }
      };
      
  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (<p>Your cart is empty.</p>) : (
          cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} />
              <div className="item-details">
                <h4>{product.title}</h4>
                <p>Rs.{product.price}</p>
                <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
              </div>
            </div>
          ))
        )}

        <button className="close-button" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default CartModal;
