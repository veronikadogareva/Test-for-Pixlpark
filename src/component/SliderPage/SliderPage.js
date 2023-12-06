import { Link } from 'react-router-dom';
import { SliderContext } from '../../contexts/SliderContext';
import './SliderPage.css';
import { useContext } from 'react';
function SliderPage({ children }) {
  const { width } = useContext(SliderContext);
  return (
    <div className="slider-page" style={{
      minWidth: `${width}px`,
      maxWidth: `${width}px`,
    }}>
      {children}
    </div>
  );
}

export default SliderPage;
