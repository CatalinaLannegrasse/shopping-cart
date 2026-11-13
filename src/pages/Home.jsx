// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import '../styles/bakery.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Boulangerie L'Étoile</h1>
        <p className="hero-subtitle">
          Authentic Parisian pastries and artisanal breads crafted daily with pure French butter and tradition.
        </p>
        <Link to="/shop">
          <button className="hero-btn">Explorer le Menu</button>
        </Link>
      </section>

      {/* Featured Highlights Section */}
      <section className="highlights-section">
        <div className="highlight-card">
          <h3>🇫🇷 Pur Beurre</h3>
          <p>Imported traditional Normandy butter folded into every layer of our viennoiseries.</p>
        </div>
        <div className="highlight-card">
          <h3>🌾 Artisanal & Frais</h3>
          <p>Baked fresh every morning before sunrise using time-honored French techniques.</p>
        </div>
        <div className="highlight-card">
          <h3>✨ Fait Maison</h3>
          <p>From our crispy baguettes to delicate macarons, everything is 100% handcrafted.</p>
        </div>
      </section>

      {/* Story / About Teaser */}
      <section className="story-section">
        <div className="story-content">
          <h2>L'Art de la Boulangerie</h2>
          <p>
            Nestled in tradition, Boulangerie L'Étoile brings the warmth and aroma of a classic Parisian corner bakery straight to your table. We believe that good bread takes time, patience, and uncompromising quality ingredients.
          </p>
          <Link to="/shop" className="story-link">Découvrez nos douceurs &rarr;</Link>
        </div>
      </section>
    </div>
  );
}