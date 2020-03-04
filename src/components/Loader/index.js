import React, { useEffect } from 'react';
import './loader.css';
import { THEME, setCss } from '../../THEME';

export const Loader = ({ color = THEME.MAIN_COLOR }) => {
	
	useEffect(() => {
		const style = setCss(`
		.lds-ring div{
			border-color: ${color} transparent transparent transparent;
		}`);
		return () => style.remove();
	}, []);
	
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