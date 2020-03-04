import React, { useEffect } from 'react';
import { THEME, setCss } from '../../../THEME';
import Button from '../../ui/StyledButton';
import './index.css';

export default ({ data:{ title, content, imgSrc, imgAlt }}) => {
  useEffect(() => {
    const style = setCss(`
      .presentation-block {
        background-color: ${THEME.MAIN_COLOR};
        color: ${THEME.COMPONENT_TEXT_COLOR};
      }
    `);
    return () => style.remove();
  },[]);
  return (
		<div className='presentation-block'>
			<div className='presentation-text'>
        <h3 className='presentation-title'>{title}</h3>
        <div className='presentation-content'>{content}</div>
        <Button title='Hello' type='outlined' />
      </div>
      <img className='presentation-img' src={imgSrc} alt={imgAlt} />

		</div>
	) 
}