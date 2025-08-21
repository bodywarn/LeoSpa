import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
        <div className="logo">
          <img src="public/images/logo.png" alt="Leospa Logo" className="logo-icon" />
        </div>

        <nav className="nav">
          <ul>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="/features">Feature</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
