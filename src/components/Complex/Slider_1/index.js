import React, { useEffect, useState } from 'react';
import { THEME, setCss } from '../../../THEME';
import './index.css';

export default ({ 
    data:{ slides, 
      size:{ width = '640px', 
      height = '420px' 
    }},
    loop = true,
    autoplay = false
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
  });

  const [$slides, set$slides] = useState(null);
  const [$pagination, set$pagination] = useState(null);
  const [active, setActive] = useState(0);
  
  /*const autoplayHandler = () => {
    const interval = setTimeout(function ($slides) {
      setActiveHandler(active + 1);
    }, 1000, $slides);
    console.log(interval) 
  }*/
  
  useEffect(() => {
    set$slides(document.querySelectorAll('.slide'));
    set$pagination(document.querySelectorAll('.slides-wrapper .pagination .pagination-item'));
    //autoplayHandler();
  }, []);

  useEffect(() => {
    if(!$slides || !$pagination)
      return
    let i = 0;
    while(i < active) {
      $slides[i].classList.remove('active');
      $slides[i].classList.remove('right');
      $slides[i].classList.add('left');
      i++;
    }
    i = $slides.length - 1;
    while(i > active) {
      $slides[i].classList.remove('active');
      $slides[i].classList.remove('left');
      $slides[i].classList.add('right');
      i--;
    }
    $slides[active].classList.remove('right');
    $slides[active].classList.remove('left');
    $slides[active].classList.add('active');

    $pagination.forEach((item, index)=> {
      if(index === active)
        item.classList.add('active')
      else
        item.classList.remove('active')
    });
  }, [active, $slides, $pagination]);

  const setActiveHandler = (newValue) => {
    if(!$slides)
      return
    let result;
    if(newValue < 0)
      result = loop ? $slides.length - 1 : 0;
    else if(newValue > $slides.length - 1)
      result = loop ? 0 : $slides.length - 1;
    else result = newValue;
    setActive(() => result);
  }
  const slidesView = slides.map((slide) => (
    <img 
      className='slide'
      key={slide.imgPrev} 
      src={slide.imgPrev} 
      alt={slide.title}
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