import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faTimes } from '@fortawesome/free-solid-svg-icons';
import './index.css';

export default ({ children, onClose }) => {
  const closeHandler = (e) => {
  	if(e.target.parentNode.classList.contains('content'))
  		return;
  	onClose();
  }
  return (
		<div className='modal-wrapper' onClick={closeHandler}>
			<div className='content-wrapper'>
				<div className='content'>
					{children}
				</div>
				<div className='close-btn' onClick={closeHandler}><FontAwesomeIcon icon={faTimes}/></div>
			</div>
		</div>
	) 
}