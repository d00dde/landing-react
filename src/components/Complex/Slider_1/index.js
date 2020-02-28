import React, { useEffect } from 'react';
import { THEME, setCss } from '../../../THEME';
import './index.css';

export default ({ data:{ slides, size:{ width = '640px', height = '420px' } }}) => {
  
  useEffect(() => {
    const style = setCss(`
      .slides-wrapper {
        position: relative;
        width: ${width};
        height: ${height};
        overflow: hidden;
      }
      .slide {
        position: absolute;
        top: 0;
        width: ${width};
        height: ${height};
        object-fit: cover;
        transition: .3s;
      }
      .slide.right {
        left: ${width};
      }
      .slide.left {
        left: -${width};
      }
    `);
    return () => style.remove();
  });

  let $slides = [];
  let active = 0;
  
  useEffect(() => {
    $slides = document.querySelectorAll('.slide');
    $slides.forEach((slide) => slide.classList.add('right'))
    $slides[active].classList.remove('right');
    $slides[0].classList.add('active');

  }, []);
  const slideLeft = () => {
    if(active === $slides.length - 1)
      return
    $slides[active].classList.remove('active');
    $slides[active].classList.add('left');
    active++;
    $slides[active].classList.remove('right');
    $slides[active].classList.add('active');
  }

  const slideRight = () => {
    if(active === 0)
      return
    $slides[active].classList.remove('active');
    $slides[active].classList.add('right');
    active--;
    $slides[active].classList.remove('left');
    $slides[active].classList.add('active');
  }
  const slidesView = slides.map((slide) => (
    <img 
      className='slide'
      key={slide.imgPrev} 
      src={slide.imgPrev} 
      alt={slide.title}
    />
  ));
  const pagination = slides.map((slide) => (
    <div 
      className='pagination-item'
      key={slide.imgPrev}

    >
    </div>
  ));
  return (
		<div className='slider-block'>
      <div className='slides-wrapper'>
        {slidesView}
        <div className='btn-left' onClick={slideRight}></div>
        <div className='btn-right' onClick={slideLeft}></div>
        <div className='pagination'>{pagination}</div>
      </div>
		</div>
	) 
}