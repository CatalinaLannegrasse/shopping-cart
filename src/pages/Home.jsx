import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page" style={{ textAlign: 'center', padding: '6rem 2rem', fontFamily: 'serif' }}>
      <h1 style={{ fontSize: '3rem', color: '#2c2c2c', marginBottom: '1rem' }}>Boulangerie L'Étoile</h1>
      <p style={{ fontSize: '1.3rem', color: '#555', maxWidth: '600px', margin: '0 auto 2rem auto', fontStyle: 'italic' }}>
        Authentic Parisian pastries and artisanal breads crafted daily in the heart of the tradition.
      </p>
      <Link to="/shop">
        <button style={{ 
          padding: '0.85rem 2rem', 
          fontSize: '1.1rem', 
          backgroundColor: '#8b5a2b', 
          color: 'white', 
          border: 'none', 
          borderRadius: '30px', 
          cursor: 'pointer',
          letterSpacing: '1px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          Explore Menu
        </button>
      </Link>
    </div>
  );
}