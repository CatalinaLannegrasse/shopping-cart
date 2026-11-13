import { useState } from 'react';

export default function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val) || val < 1) {
      setQuantity(1);
    } else {
      setQuantity(val);
    }
  };

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="product-card" style={cardStyle}>
      <img src={product.image} alt={product.title} style={imageStyle} />
      <h3 style={{ fontSize: '0.95rem', margin: '0.5rem 0', height: '2.4rem', overflow: 'hidden' }}>
        {product.title}
      </h3>
      <p style={{ fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>
        ${product.price.toFixed(2)}
      </p>
      
      {/* Quantity controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', margin: '0.5rem 0' }}>
        <button onClick={decrement} style={btnStyle}>-</button>
        <input 
          type="number" 
          min="1" 
          value={quantity} 
          onChange={handleInputChange} 
          style={inputStyle}
        />
        <button onClick={increment} style={btnStyle}>+</button>
      </div>

      <button 
        onClick={() => onAddToCart(product, quantity)}
        style={addBtnStyle}
      >
        Add To Cart
      </button>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'white',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  textAlign: 'center',
};

const imageStyle = {
  width: '120px',
  height: '120px',
  objectFit: 'contain',
};

const btnStyle = {
  padding: '0.25rem 0.5rem',
  cursor: 'pointer',
  backgroundColor: '#f3f4f6',
  border: '1px solid #d1d5db',
  borderRadius: '4px',
};

const inputStyle = {
  width: '45px',
  textAlign: 'center',
  padding: '0.25rem',
  border: '1px solid #d1d5db',
  borderRadius: '4px',
};

const addBtnStyle = {
  backgroundColor: '#4f46e5',
  color: 'white',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
  width: '100%',
  marginTop: '0.5rem',
};