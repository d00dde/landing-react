import React, { useContext, useState } from 'react';
import './mainPage.css';
import { data } from '../../data';
/*import Presss from '../../components/Complex/PresentationBlock_1';*/
import Slider from '../../components/Complex/Slider_1';
import { useModal } from '../../hooks/modalHook';

export const MainPage = () => {
	const { openModal } = useModal();
	return (
		<main className='main-page-wrapper page'>
			<h2>MainPage</h2>
			{/*<Presss data={data.presentation}/>*/}
			<Slider data={data.slider} onClick={(i) => console.log(i)}/>
		</main>
	)
	
}