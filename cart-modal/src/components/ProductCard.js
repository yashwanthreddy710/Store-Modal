import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product,addProduct }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Rs.{product.price}</p>
      <button onClick={() => addProduct(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
