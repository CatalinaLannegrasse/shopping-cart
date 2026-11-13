import { useState } from 'react';
import ProductCard from '../components/ProductCard';

// Custom mock products for our French Bakery
const BAKERY_PRODUCTS = [
  {
    id: 1,
    title: 'Croissant pur beurre',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80',
    description: 'Flaky, buttery traditional Parisian croissant.'
  },
  {
    id: 2,
    title: 'Macaron Box (6 pcs)',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=500&q=80',
    description: 'Assorted delicate French almond meringue cookies.'
  },
  {
    id: 3,
    title: 'Pain au Chocolat',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=500&q=80',
    description: 'Viennoiserie filled with rich dark chocolate batons.'
  },
  {
    id: 4,
    title: 'Tarte au Citron Meringuée',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=500&q=80',
    description: 'Tangy lemon curd tart topped with toasted fluffy meringue.'
  },
  {
    id: 5,
    title: 'Baguette Tradition',
    price: 2.20,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80',
    description: 'Crispy crust with an airy, soft interior.'
  },
  {
    id: 6,
    title: 'Éclair au Chocolat',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1621252171049-9f7a83d73989?auto=format&fit=crop&w=500&q=80',
    description: 'Choux pastry filled with pastry cream and glazed with chocolate.'
  }
];

export default function Shop() {
  // No need for async fetching anymore; we use our curated French bakery collection!
  const [products] = useState(BAKERY_PRODUCTS);

  const handleAddToCart = (product, quantity) => {
    console.log(`Added ${quantity} of "${product.title}" to cart`);
  };

  return (
    <div className="shop-page" style={{ padding: '3rem 2rem', maxWidth: '1200px', margin: '0 auto', fontFamily: 'serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#2c2c2c', marginBottom: '0.5rem' }}>Nos Douceurs</h1>
        <p style={{ color: '#666', fontStyle: 'italic' }}>Freshly baked every morning with French butter and tradition.</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', 
        gap: '2rem' 
      }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}