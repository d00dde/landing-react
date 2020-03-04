import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';
import { data } from '../../data';
import { THEME, setCss } from '../../THEME';

export const Footer = () => {
	useEffect (() => {
		let style =  setCss(`
			.footer-wrapper { 
				background-color: ${THEME.MAIN_COLOR}; 
			}
			.footer-links {
				color: ${THEME.FOOTER_TEXT_COLOR};
			}
			.footer-links a{
				color: ${THEME.FOOTER_TEXT_COLOR};
			}`);
		return () => style.remove();
	}, []);
	return (
		<div className='footer-wrapper'>
			<div><FontAwesomeIcon /></div>
			<ul className='footer-links'>
				<span>Contacts: </span>
				{data.footerLinks.map((contact) =><li 
						key={contact.title}
					>
						<span><FontAwesomeIcon icon={contact.icon}/></span> {contact.title}: <a href={contact.link}>{contact.value}</a>
					</li> )}
			</ul>
		</div>
	)
}