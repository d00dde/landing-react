import { MainPage } from './mainPage';
import { AboutPage } from './aboutPage';
import { ContactsPage } from './contactsPage';
import { ExtendedPage } from './extendedPage';

export const pages = [
	{ path: '/', component: MainPage, title: 'Home'},
	{ path: '/about', component: AboutPage, title: 'About'},
	{ path: '/contact', component: ContactsPage, title: 'Contacts'},
	{ path: '/extended', component: ExtendedPage, title: 'Extended'},

]