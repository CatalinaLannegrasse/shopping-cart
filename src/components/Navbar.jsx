import { Link } from 'react-router-dom';
import '../App.css'; // or your preferred style file

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Odin Shop</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart (0)</Link>
      </div>
    </nav>
  );
}