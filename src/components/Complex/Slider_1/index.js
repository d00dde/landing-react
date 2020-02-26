import React, { useEffect } from 'react';
import { THEME, setCss } from '../../../THEME';
import './index.css';

export default ({ slides }) => {
  useEffect(() => {
    const style = setCss(`

    `);
    return () => style.remove();
  });

  return (
		<div className='slider-block'>
			
		</div>
	) 
}