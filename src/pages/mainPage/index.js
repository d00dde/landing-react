import React from 'react';
import './mainPage.css';
import { data } from '../../data';
/*import Presss from '../../components/Complex/PresentationBlock_1';*/
/*import Slider from '../../components/Complex/Slider_1';*/
import Modal from '../../components/Complex/Modal_1';

export const MainPage = () => {
	return (
		<main className='main-page-wrapper page'>
			<h2>MainPage</h2>
			{/*<Presss data={data.presentation}/>*/}
			{/*<Slider data={data.slider} />*/}
			<Modal />
		</main>
	) 
}