// src/pages/Shop.jsx
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { BAKERY_PRODUCTS } from '../data/bakeryProducts';
import '../styles/bakery.css';

export default function Shop({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching products from an API endpoint with a slight network delay
    const fetchBakeryItems = async () => {
      try {
        setLoading(true);
        // Pretending to fetch from a backend API
        await new Promise((resolve) => setTimeout(resolve, 600));
        
        setProducts(BAKERY_PRODUCTS);
        setLoading(false);
      } catch (err) {
        setError('Failed to load menu items. Please try again later.');
        setLoading(false);
      }
    };

    fetchBakeryItems();
  }, []);

  if (loading) {
    return (
      <div className="bakery-container" style={{ textAlign: 'center', padding: '6rem 2rem' }}>
        <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: '#666' }}>
          Préparation de la vitrine... (Loading menu)
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bakery-container" style={{ textAlign: 'center', padding: '6rem 2rem', color: '#d9534f' }}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="bakery-container">
      <div className="bakery-header">
        <h1>Nos Douceurs</h1>
        <p>Freshly baked every morning with French butter and tradition.</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}