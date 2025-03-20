import './App.css';
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import NavBar from './components/NavBar';
import CartModal from './components/CartModal';

function App() {
    const [cart, setCart] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const addProduct = (product) => {
      if (cart.some((item) => item.id === product.id)) {
        alert('Item already added to the cart');
        return;
      }
      setCart([...cart, product]);
    };

    const removeFromCart = (id) => {
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
    };
  
    const openCart = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <NavBar cart={cart} openCart={openCart} />
      <ProductList addProduct={addProduct} />

      {isModalOpen && (
        <CartModal cart={cart} removeFromCart={removeFromCart} closeModal={closeModal} />
      )}
    </div>
  );
}

export default App;

