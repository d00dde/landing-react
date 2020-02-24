import React from 'react';
import './mainPage.css';
import { data } from '../../data';
import Presss from '../../components/Complex/PresentationBlock_1';

export const MainPage = () => {
	return (
		<main className='main-page-wrapper page'>
			<h2>MainPage</h2>
			<Presss data={data.presentation}/>
		</main>
	) 
}