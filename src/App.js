import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { pages } from './pages';
import './App.css';

export const App = () => {

  return (
  	<div className='container'>
	  	<Router>
	  		<Navbar />
  	    <Switch>
  	    	{pages.map((page) => <Route key={page.title} path={page.path} exact>{page.component}</Route>)}
	        <Redirect to='/' />
				</Switch>
        <Footer />
	    </Router>
    </div>
  );
}

