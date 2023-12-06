import './Servises.css';
import Card from '../Card/Card';
function Servises({ cards }) {
  return (
    <div className="servises">
      <h2 className="servises__title">УСЛУГИ</h2>
      <ul className="servises__container">
        {cards.map((card) => {
          return <Card key={card.id} image={card.image} title={card.title} price={card.price} path={card.path}/>
        })}
      </ul>
    </div>
  );
}

export default Servises;
