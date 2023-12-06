import { Link } from 'react-router-dom';
import './Main.css';
import Servises from '../Servises/Servises';
import Slider from '../Slider/Slider';
import SliderPage from '../SliderPage/SliderPage';
function Main({ cards }) {
  return (
    <div className="main">
      <Slider>
        <SliderPage />
        <SliderPage >
          <h1 className="slider__title">ИЗГОТОВЛЕНИЕ ФОТОГРАФИЙ</h1>
          <p className="slider__pharagraph">Наполни свой дом уютом или сделай подарок своим близким</p>
          <Link className="slider__nav-button" to="/">Перейти в каталог</Link>
        </SliderPage >
        <SliderPage />
        <SliderPage />
      </Slider>
      <Servises cards={cards} />
    </div>
  );
}

export default Main;
