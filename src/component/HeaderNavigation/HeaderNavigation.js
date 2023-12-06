import { Link } from 'react-router-dom';
import './HeaderNavigation.css';
import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
function HeaderNavigation({ handleBurgerButton, isBurgerMenu }) {
  return (
    <nav className="header-navigation">
      {!isBurgerMenu ? (
        <>
          <ul className="header-navigation__items">
            <li className="header-navigation__item"><Link to="/" className="header-navigation__link">Пластификация</Link></li>
            <li className="header-navigation__item"><Link to="/" className="header-navigation__link">Холст</Link></li>
            <li className="header-navigation__item"><Link to="/" className="header-navigation__link">Фотобанк</Link></li>
            <li className="header-navigation__item"><Link to="/" className="header-navigation__link">Доставка и оплата</Link></li>
          </ul>
          <button className="header-navigation__burger" type="button" onClick={handleBurgerButton} /> </>) :
        <BurgerMenu isBurgerMenu={isBurgerMenu} onClose={handleBurgerButton} />}
    </nav>
  );
}

export default HeaderNavigation;