// src/App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      
      if (existingIndex > -1) {
        // IMMUTABLE UPDATE: map over prevCart and return new objects
        return prevCart.map((item, index) => 
          index === existingIndex 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar itemCount={totalItemsCount} />
        
        <div style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cart={cart} 
                  onUpdateQuantity={updateQuantity} 
                  onRemove={removeFromCart} 
                  onClearCart={clearCart}
                />
              } 
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}