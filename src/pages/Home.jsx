import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1>Welcome to Odin Shop!</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '1rem auto' }}>
        Discover our curated collection of quality goods. Built with React and React Router as part of The Odin Project.
      </p>
      <Link to="/shop">
        <button style={{ 
          padding: '0.75rem 1.5rem', 
          fontSize: '1rem', 
          backgroundColor: '#4f46e5', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer',
          marginTop: '1rem'
        }}>
          Shop Now
        </button>
      </Link>
    </div>
  );
}