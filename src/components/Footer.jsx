// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2.5rem 1rem',
      marginTop: '4rem',
      borderTop: '1px solid #eaeaea',
      color: '#777',
      fontFamily: "'Lato', sans-serif",
      fontSize: '0.9rem',
      backgroundColor: '#fff'
    }}>
      <p style={{ margin: '0 0 0.5rem 0', fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#2c2c2c' }}>
        Boulangerie L'Étoile 🥐 — Fait avec amour et beurre frais
      </p>
      <p style={{ margin: 0 }}>
        Built with React & React Router as part of The Odin Project.
      </p>
    </footer>
  );
}