import React, { useState, useEffect, useCallback } from 'react';
import Modal from '../components/Complex/Modal_1';

export const useModal = () => {
	const [ isShow, setIsShow ] = useState(false);
	const [ modal, setModal ] = useState(null);
	const [ content, setContent ] = useState(null);
	useEffect(() => {
		setModal(isShow ?	<Modal onClose={() => setIsShow(false)} >{content}</Modal> : null);
	}, [isShow, content]);
	const openModal = useCallback((cont) => {
		setContent(cont);
		setIsShow(true);
	}, []);
	return {
		modal,
		openModal
	}
} 