import React from 'react';
import { THEME } from '../../../THEME';
import './index.css';

export default ({ data:{ title, content, imgSrc, imgAlt }}) => {
	return (
		<main className='presentation-block'>
			<div className='presentation-text'>
        <h3 className='presentation-title'>{title}</h3>
        <div className='presentation-content'>{content}</div>
      </div>
      <div className='presentation-img'><img src={imgSrc} alt={imgAlt} /></div>
		</main>
	) 
}