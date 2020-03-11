import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faTimes } from '@fortawesome/free-solid-svg-icons';
import './index.css';

export default ({ children, onClose }) => {
  const closeHandler = (e) => {
  	let test = e.target;
		do {
			if(test.dataset.close){
				onClose();
				return;
			}
			test = test.parentNode;
		} while (!test.classList.contains('modal-wrapper'))
  }

  return (
		<div className='modal-wrapper' data-close onClick={closeHandler}>
			<div className='content-wrapper'>
				<div className='content'>
					{children}
				</div>
				<div className='close-btn' data-close onClick={closeHandler}><FontAwesomeIcon icon={faTimes}/></div>
			</div>
		</div>
	) 
}