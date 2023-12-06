import './Contacts.css';
function Contacts({ isBurgerMenu }) {
  return (
    <div className={`contacts ${isBurgerMenu ? "contacts_fixed" : ""}`}>
      <a className="contacts__link" href="tel:+79165568556"><div className="contact__icon-phone"></div><p className="contacts__text">+7 (916) 556-85-56</p></a>
      <a className="contacts__link contacts__link_type_email" href="mailto:Lookart@internet.ru"><div className="contact__icon-email"></div><p className="contacts__text">Lookart@internet.ru</p></a>
    </div>
  );
}

export default Contacts;
