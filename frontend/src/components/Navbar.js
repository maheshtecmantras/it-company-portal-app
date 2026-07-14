import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="site-header">
      <Link to="/" className="logo">
        <span role="img" aria-label="triangle">▲</span>
        IT Company
      </Link>
      <nav className="nav-links">
        <NavLink end to="/">
          Home
        </NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
      <div className="nav-cta">
        <a className="btn secondary" href="#contact">
          Book time
        </a>
      </div>
    </header>
  );
}

export default Navbar;
