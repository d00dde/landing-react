import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { pages } from './pages';
import { useModal } from './hooks/modalHook';
import { THEME, setCss } from './THEME';
import './App.css';

export const App = () => {
  useEffect(() => {
    const style = setCss(`
      .container{
        background-color: ${THEME.BACKGROUND_COLOR};
      }
    `);
    return () => style.remove();
  }, []);
  const { modal } = useModal();
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
      { modal }
    </div>
  );
}

