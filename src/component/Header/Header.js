import './Header.css';
import Contacts from '../Contacts/Contacts';
import HeaderMain from '../HeaderMain/HeaderMain';
import { useState } from 'react';
function Header() {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  function handleBurgerButton() {
    setIsBurgerMenu(!isBurgerMenu);
    if (!isBurgerMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
  return (
    <>
      <div className={`overlay ${isBurgerMenu ? "overlay_opened" : ""}`} />
      <header className={`header ${isBurgerMenu ? "header_fixed" : ""}`}>
        <Contacts isBurgerMenu={isBurgerMenu} />
        <HeaderMain handleBurgerButton={handleBurgerButton} isBurgerMenu={isBurgerMenu} />
      </header>
    </>
  );
}

export default Header;
