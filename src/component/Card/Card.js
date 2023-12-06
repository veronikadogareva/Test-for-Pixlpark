import { Link } from 'react-router-dom';
import './Card.css';
function Card({ image, title, price, path }) {
  return (
    <li>
      <article className="card">
        <img className="card__image" alt={`${title} - фото услуги`} src={image} />
        <h3 className="card__title">{title}</h3>
        <p className="card__price">от {price} p</p>
        <Link to={path} className="card__button" role="button" />
      </article>
    </li>
  );
}

export default Card;
