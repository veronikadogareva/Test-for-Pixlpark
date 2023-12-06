import { Link } from 'react-router-dom';
import './HeaderMain.css';
import logo from '../../images/logo.svg';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
function HeaderMain({ handleBurgerButton, isBurgerMenu }) {
  return (
    <div className="header-main">
      <img src={logo} alt="Логотип сайта Lookart" className="header-main__logo" />
      <HeaderNavigation handleBurgerButton={handleBurgerButton} isBurgerMenu={isBurgerMenu} />
      <Link to="/" className="header-main__profile" />
      <Link to="/" className="header-main__buy" />
    </div>
  );
}

export default HeaderMain;
