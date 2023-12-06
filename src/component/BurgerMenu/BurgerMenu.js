import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo_360.svg';
import './BurgerMenu.css';

function BurgerMenu({ isBurgerMenu, onClose }) {
  return (
    <ul className={`burger-menu ${isBurgerMenu ? "burger-menu_opened" : ""}`}>
      <li className="burger-menu__item">< img src={logo} alt="Логотип сайта Lookart" className="burger-menu__logo" /></li>
      <li className="burger-menu__item"><button className="burger-menu__button" type="button" onClick={onClose} /></li>
      <div className="burger-menu__navigation">
        <li className="burger-menu__item"><NavLink className={({ isActive }) => `burger-menu__link ${isActive ? "burger-menu__link_active" : ""}`} to="/df" onClick={onClose}>Пластификация</NavLink></li>
        <li className="burger-menu__item"><NavLink className={({ isActive }) => `burger-menu__link ${isActive ? "burger-menu__link_active" : ""}`} to="/df" onClick={onClose}>Холст</NavLink></li>
        <li className="burger-menu__item"><NavLink className={({ isActive }) => `burger-menu__link ${isActive ? "burger-menu__link_active" : ""}`} to="/df" onClick={onClose}>Фотобанк</NavLink></li>
        <li className="burger-menu__item"><NavLink className={({ isActive }) => `burger-menu__link ${isActive ? "burger-menu__link_active" : ""}`} to="/df" onClick={onClose}>Доставка и оплата</NavLink></li>
      </div>
    </ul>
  )
}
export default BurgerMenu;