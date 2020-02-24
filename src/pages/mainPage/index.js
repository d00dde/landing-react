import React from 'react';
import './mainPage.css';
import { data } from '../../data';
import Presss from '../../components/Complex/PresentationBlock_1';
import Button from '../../components/ui/StyledButton';

export const MainPage = () => {
	return (
		<main className='main-page-wrapper page'>
			<h2>MainPage</h2>
			<Presss data={data.presentation}/>
			<Button title='Help'/>
		</main>
	) 
}