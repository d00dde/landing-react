import React, { useEffect } from 'react';
import './loader.css';
import { THEME } from '../../THEME';

export const Loader = ({ color = THEME.MAIN_COLOR }) => {
	
	useEffect(() => {
		const circles = document.querySelectorAll('.lds-ring div');
		circles.forEach((circle) => {
			circle.style.borderColor = `${color} transparent transparent transparent`;
		});
	}, [color]);
	
	return (
		<div className='loader-wrapper'>
			<div className="lds-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	) 
}