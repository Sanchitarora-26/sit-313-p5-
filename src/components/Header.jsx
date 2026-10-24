import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/">DEV@Deakin/Chitkara</Link>
      <nav aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <a href="/#about">About</a>
        <a href="/#articles">Articles</a>
        <a href="/#tutorials">Tutorials</a>
        <Link to="/post">New Post</Link>
        <a href="/#newsletter">Newsletter</a>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}

export default Header;
