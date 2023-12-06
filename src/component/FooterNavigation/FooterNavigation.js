import { Link } from 'react-router-dom';
import './FooterNavigation.css';
function FooterNavigation({ text1, text2, text3, text4, text5 }) {
  return (
    <nav >
      <ul className="footer-navigation">
        <li className="footer-navigation__item"><Link to="/" className="footer-navigation__link">{text1}</Link></li>
        <li className="footer-navigation__item"><Link to="/" className="footer-navigation__link">{text2}</Link></li>
        <li className="footer-navigation__item"><Link to="/" className="footer-navigation__link">{text3}</Link></li>
        <li className="footer-navigation__item"><Link to="/" className="footer-navigation__link">{text4}</Link></li>
        <li className="footer-navigation__item"><Link to="/" className="footer-navigation__link">{text5}</Link></li>
      </ul>
    </nav>
  );
}

export default FooterNavigation;
