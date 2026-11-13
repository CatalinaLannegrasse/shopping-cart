import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { BAKERY_PRODUCTS } from '../data/bakeryProducts';
import '../styles/bakery.css';

export default function Shop({ onAddToCart }) {
  const [products] = useState(BAKERY_PRODUCTS);

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