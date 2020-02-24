export const THEME = {
	MAIN_COLOR: '#3949ab',
	NAV_TEXT_COLOR: '#FFF',
	NAV_HOVER_COLOR: '#5c6bc0',
	COMPONENT_TEXT_COLOR: '#ddd',
	FOOTER_TEXT_COLOR: '#FFF',
}

export const setCss = (css) => {
	let style = document.createElement('style');
	style.type = 'text/css';
	if (style.styleSheet) {
			style.styleSheet.cssText = css;
	} else {
			style.appendChild(document.createTextNode(css));
	}
	document.getElementsByTagName('head')[0].appendChild(style);
	return style;
}