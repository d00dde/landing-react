import React, { useContext } from 'react';
import Slider from '../components/Complex/Slider_1';
import { ModalContext } from '../contexts/modalContext';

export const SliderWithModal = (props) => {
	const { openModal } = useContext(ModalContext);
	const clickHandler = (slide) => {
		openModal( <img src={slide.imgFull} />);
	}
	return (
		<Slider {...props} onClick={clickHandler} />
	)
}