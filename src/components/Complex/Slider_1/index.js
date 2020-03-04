import React, { useEffect, useState, useCallback, useRef } from 'react';
import { THEME, setCss } from '../../../THEME';
import './index.css';

export default ({ 
    data:{ 
      slides, 
      size:{ 
        width = '640px', 
        height = '420px' 
      }
    },
    loop = true,
    autoplay = false,
    autoplayInterval = 2000,
    onClick = () => {}
  }) => {
  
  useEffect(() => {
    const style = setCss(`
      .slides-wrapper {
        position: relative;
        width: ${width};
        height: ${height};
        overflow: hidden;
      }
      .slides-wrapper .btn-left,
      .slides-wrapper .btn-right {
        background-color: ${THEME.MAIN_COLOR};
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
      .slides-wrapper .pagination .pagination-item {
        width: 10px;
        height: 10px;
        margin: 5px;
        border: 2px solid ${THEME.MAIN_COLOR};
        border-radius: 50%;
        opacity: .8;
        cursor: pointer;
        transition: box-shadow background-color.3s;
      }
      .slides-wrapper .pagination .pagination-item.active {
        background-color: ${THEME.MAIN_COLOR};
      }
      .slides-wrapper .pagination .pagination-item:hover {
        box-shadow: 0px 0px 1px 3px ${THEME.MAIN_COLOR};
        background-color: ${THEME.MAIN_COLOR};
      }

    `);
    return () => style.remove();
  }, [width, height]);

  const $slides = useRef(null);
  const $pagination = useRef(null);
  const [active, setActive] = useState(0);

  const setActiveHandler = useCallback((newValue) => {
    if(!$slides.current)
      return
    let result;
    if(newValue < 0)
      result = loop ? $slides.current.length - 1 : 0;
    else if(newValue > $slides.current.length - 1)
      result = loop ? 0 : $slides.current.length - 1;
    else result = newValue;
    setActive(() => result);
  }, [loop]);
 
  useEffect(() => {
    $slides.current = document.querySelectorAll('.slide');
    $pagination.current = document.querySelectorAll('.slides-wrapper .pagination .pagination-item');
  }, []);

  useEffect(() => {
    if(!autoplay)
      return;
    const timeout = setInterval(function () {
      setActiveHandler(active + 1);
    }, autoplayInterval);
    return () => clearInterval(timeout);
  }, [active, autoplay, autoplayInterval, setActiveHandler]);

  useEffect(() => {
    if(!$slides.current || !$pagination.current)
      return
    let i = 0;
    while(i < active) {
      $slides.current[i].classList.remove('active');
      $slides.current[i].classList.remove('right');
      $slides.current[i].classList.add('left');
      i++;
    }
    i = $slides.current.length - 1;
    while(i > active) {
      $slides.current[i].classList.remove('active');
      $slides.current[i].classList.remove('left');
      $slides.current[i].classList.add('right');
      i--;
    }
    $slides.current[active].classList.remove('right');
    $slides.current[active].classList.remove('left');
    $slides.current[active].classList.add('active');

    $pagination.current.forEach((item, index)=> {
      if(index === active)
        item.classList.add('active')
      else
        item.classList.remove('active')
    });
  }, [active, $slides, $pagination]);



  const slidesView = slides.map((slide) => (
    <img 
      className='slide'
      key={slide.imgPrev} 
      src={slide.imgPrev} 
      alt={slide.title}
      onClick={() => onClick(slide)}
    />
  ));

  const pagination = slides.map((slide, index) => (
    <div 
      onClick={() => setActiveHandler(index)}
      className='pagination-item'
      key={slide.imgPrev}
    >
    </div>
  ));

  return (
		<div className='slider-block'>
      <div className='slides-wrapper'>
        {slidesView}
        <div className='btn-left' onClick={() => setActiveHandler(active - 1)}></div>
        <div className='btn-right' onClick={() => setActiveHandler(active + 1)}></div>
        <div className='pagination'>{pagination}</div>
      </div>
		</div>
	) 
}