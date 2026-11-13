// src/App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

export default function App() {
  const [cart, setCart] = useState([]);

  // Function to add products to cart (or increase quantity if already exists)
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      
      if (existingIndex > -1) {
        // Item already exists, update its quantity
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += quantity;
        return updatedCart;
      } else {
        // Brand new item to cart
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // Calculate total item count for the navbar badge
  const totalItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <BrowserRouter>
      <Navbar itemCount={totalItemsCount} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}