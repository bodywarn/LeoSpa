import "./Footer.scss";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src="/Images/butterfly.png" alt="Leospa" className="footer__icon" />
        <h2>Leospa</h2>
      </div>

      <nav className="footer__nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Feature</a>
        <a href="#">Service</a>
        <a href="#">Contact</a>
      </nav>

      <div className="footer__social">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaGooglePlusG /></a>
        <a href="#"><FaInstagram /></a>
      </div>

      <p className="footer__copy">
        © COPYRIGHT 2019 <span>THEMEIES.COM</span>. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
};

export default Footer;