// src/components/ProductCard.jsx
import { useState } from 'react';
import '../styles/bakery.css';

export default function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setQuantity(isNaN(val) || val < 1 ? 1 : val);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-img" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      
      <div className="quantity-controls">
        <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="qty-btn">-</button>
        <input 
          type="number" 
          min="1" 
          value={quantity} 
          onChange={handleInputChange} 
          className="qty-input"
        />
        <button onClick={() => setQuantity((q) => q + 1)} className="qty-btn">+</button>
      </div>

      <button onClick={() => onAddToCart(product, quantity)} className="add-btn">
        Ajouter au Panier
      </button>
    </div>
  );
}