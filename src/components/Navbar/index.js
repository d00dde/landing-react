import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { pages } from '../../pages';
import { THEME } from '../../THEME';
import './navbar.css';

export const Navbar = () => {
	useEffect (() => {
		let css = `.nav-wrapper { 
									background-color: ${THEME.MAIN_COLOR}; 
								}
								.nav-links li a {
									color: ${THEME.NAV_TEXT_COLOR};
									transition: .3s;

								}
								.nav-links li a:hover {
									background-color: ${THEME.NAV_HOVER_COLOR}
									
								}
								.nav-links .active {
									background-color: ${THEME.NAV_HOVER_COLOR};
									cursor: default;
								}
								.nav-wrapper .logo {
									color: ${THEME.NAV_TEXT_COLOR};
								}`;
		let style = document.createElement('style');

		if (style.styleSheet) {
		    style.styleSheet.cssText = css;
		} else {
		    style.appendChild(document.createTextNode(css));
		}
		document.getElementsByTagName('head')[0].appendChild(style);

	}, []);
	return (
		<nav>
			<div className='nav-wrapper'>
				<Link className='logo' to='/'>Logo</Link>
				<ul className='nav-links'>
					{pages.map((page) =><li key={page.title}><NavLink to={page.path} exact>{page.title}</NavLink></li> )}
				</ul>
			</div>
		</nav>
	) 
}