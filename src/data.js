import  { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faViber } from '@fortawesome/free-brands-svg-icons';

export const data = {
	footerLinks: [
		{title: 'phone', value: '8800853535', link: '#', icon: faPhoneAlt },
		{title: 'viber', value: '8800853535', link: '#', icon: faViber },
		{title: 'email', value: '8800853535', link: '#', icon: faEnvelope },
		{title: 'address', value: '8800853535', link: '#', icon: faMapMarkerAlt }
	],
	presentation: {
		title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat optio, in id dolore impedit sapiente!',
		content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci incidunt accusantium, alias sapiente odit autem unde eum cumque esse temporibus maiores neque! A exercitationem deleniti culpa eveniet laudantium necessitatibus animi. Mollitia quod dolor aperiam sunt, quos fugiat ex consequuntur voluptatum.',
		imgSrc: '/img/present.jpg',
		imgAlt: 'presentation'
	},
	slider: {
		size:{
			width:'1000px',
			height: '600px'
		},
		slides:[
			{ imgPrev: '/img/preview/1.jpg', imgFull: '/img/fullsize/1.jpg', title:'Lorem', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, possimus.'},
			{ imgPrev: '/img/preview/2.jpg', imgFull: '/img/fullsize/2.jpg', title:'Lorem', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, possimus.'},
			{ imgPrev: '/img/preview/3.jpg', imgFull: '/img/fullsize/3.jpg', title:'Lorem', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, possimus.'},
			{ imgPrev: '/img/preview/4.jpg', imgFull: '/img/fullsize/4.jpg', title:'Lorem', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, possimus.'},
			{ imgPrev: '/img/preview/5.jpg', imgFull: '/img/fullsize/5.jpg', title:'Lorem', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, possimus.'},
			{ imgPrev: '/img/preview/6.jpg', imgFull: '/img/fullsize/6.jpg', title:'Lorem', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, possimus.'},
		]
	}
}
