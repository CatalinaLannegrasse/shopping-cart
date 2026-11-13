// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../styles/bakery.css';

export default function Navbar({ itemCount }) {
  return (
    <nav className="navbar" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1.2rem 3rem', 
      borderBottom: '1px solid #eaeaea',
      fontFamily: 'serif',
      backgroundColor: '#fff'
    }}>
      <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#2c2c2c' }}>L'Étoile 🥐</h2>
      <div className="nav-links" style={{ display: 'flex', gap: '2rem', fontSize: '1.1rem' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
        <Link to="/shop" style={{ textDecoration: 'none', color: '#333' }}>Menu</Link>
        <Link to="/cart" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>
          Panier {itemCount > 0 && `(${itemCount})`}
        </Link>
      </div>
    </nav>
  );
}