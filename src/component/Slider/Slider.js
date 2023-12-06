
import './Slider.css';
import { SliderContext } from '../../contexts/SliderContext';
import { useEffect, useState, Children, cloneElement, useRef } from 'react';
function Slider({ children }) {
  const [pages, setPages] = useState([]);
  const [activeSlide, setActiveSlide] = useState(1);
  const [width, setWidth] = useState(450);
  const [offset, setOffset] = useState(-width);
  const windowRef = useRef();
  useEffect(() => {
    const resizeHandler = () => {
      const _width = windowRef.current.offsetWidth;
      console.log(_width);
      setWidth(_width);
      setOffset(-_width);
      setActiveSlide(1);
    };
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            minWidth: `${width}px`,
            maxWidth: `${width}px`,
            height: '100%',
          },
        })
      })
    );
    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, []);
  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + width;
      if (newOffset > 0) {
        return -(width * (pages.length - 1));;
      }
      return Math.min(newOffset, 0);
    });
    setActiveSlide((prev) => (prev - 1 + pages.length) % pages.length);
  };
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - width;
      const maxOffset = -(width * (pages.length - 1));
      if (newOffset < maxOffset) {
        return 0;
      }
      return Math.max(newOffset, maxOffset);
    });
    setActiveSlide((prev) => (prev + 1) % pages.length);
  };
  const handleDotClick = (evt) => {
    const targetDot = evt.target.getAttribute('number');
    const n = targetDot - activeSlide;
    if (n > 0) {
      for (let i = 0; i < n; i++) {
        handleRightArrowClick();
      }
    } else if (n < 0) {
      for (let i = 0; i < Math.abs(n); i++) {
        handleLeftArrowClick();
      }
    } else return;
  }
  return (
    <SliderContext.Provider value={{ width }}>
      <div className="slider" >
        <div className="slider__window" ref={windowRef}>
          <div className="slider__pages" style={{
            transform: `translateX(${offset}px)`,
          }}>
            {pages}
          </div>
        </div>
        <button className="slider__button slider__button_type_left" type="button" onClick={handleLeftArrowClick} />
        <button className="slider__button slider__button_type_right" type="button" onClick={handleRightArrowClick} />
        <div className="slider__dots">
          {pages.map((page, index) => (
            <span
              key={index}
              onClick={handleDotClick}
              number={index}
              className={`slider__dot  ${activeSlide === index ? 'slider__dot_active' : ''}`}
            />
          ))}
        </div>
      </div>
    </SliderContext.Provider>
  );
}

export default Slider;
