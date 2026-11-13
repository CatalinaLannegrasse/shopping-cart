// src/pages/Cart.jsx
import { Link } from 'react-router-dom';
import '../styles/bakery.css';

export default function Cart({ cart, onUpdateQuantity, onRemove }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="bakery-container" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
        <h2>Votre Panier est vide</h2>
        <p style={{ fontStyle: 'italic', color: '#666', margin: '1rem 0 2rem 0' }}>
          It looks like you haven't selected any pastries yet.
        </p>
        <Link to="/shop">
          <button className="add-btn" style={{ width: 'auto', padding: '0.7rem 2rem' }}>
            Retour au Menu
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bakery-container">
      <div className="bakery-header">
        <h1>Votre Panier</h1>
        <p>Review your artisanal selection before checkout.</p>
      </div>

      <div className="cart-layout">
        <div className="cart-items-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item-card">
              <img src={item.image} alt={item.title} className="cart-item-img" />
              
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)} chacun</p>
              </div>

              <div className="quantity-controls">
                <button onClick={() => onUpdateQuantity(item.id, -1)} className="qty-btn">-</button>
                <span style={{ margin: '0 0.6rem', fontWeight: 'bold' }}>{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.id, 1)} className="qty-btn">+</button>
              </div>

              <div style={{ minWidth: '70px', textAlign: 'right' }}>
                <p style={{ fontWeight: 'bold', color: '#8b5a2b', margin: 0 }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <button 
                onClick={() => onRemove(item.id)} 
                className="remove-btn" 
                title="Remove item"
              >
                &times;
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Résumé de la Commande</h3>
          <div className="summary-row">
            <span>Total</span>
            <span className="summary-total">${totalPrice.toFixed(2)}</span>
          </div>
          <button 
            className="add-btn" 
            onClick={() => alert('Simulation de commande réussie ! Merci de votre visite chez L’Étoile 🥐')}
          >
            Passer la Commande
          </button>
        </div>
      </div>
    </div>
  );
}