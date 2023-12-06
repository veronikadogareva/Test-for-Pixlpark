import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../images/logo_white.svg';
import FooterNavigation from '../FooterNavigation/FooterNavigation';
import FooterIcon from '../FooterIcon/FooterIcon';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img src={logo} alt="Логотип сайта Lookart" className="footer__logo" />
        <ul className="footer__icons">
          <FooterIcon label="instagram" />
          <FooterIcon label="vkontakte" />
          <FooterIcon label="twitter" />
          <FooterIcon label="telegram" />
        </ul>
      </div>
      <div className="footer__group">
        <FooterNavigation text1="О нас" text2="Контакты" text3="Новости" text4="Вопрос-ответ" text5="Доставка и оплата" />
        <FooterNavigation text1="Отзывы" text2="Примеры работ" text3="Наша продукция" text4="Фото для интерьера" text5="Оформление фотографий" />
      </div>
      <div className="footer__apps">
        <a href="#"><div className="footer__google-play"></div></a>
        <a href="#"><div className="footer__app-store"></div></a>
      </div>
      <div className="footer__data">
        <p className="footer__data-item">ООО “Лукарт”</p>
        <p className="footer__data-item">ИНН: 7717202311</p>
        <p className="footer__data-item">КПП: 7712121466</p>
      </div>
    </footer>
  );
}

export default Footer;
