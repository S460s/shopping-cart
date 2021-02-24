import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Nav from './components/Nav';
import Catalog from './components/Catalog';

const Routes = () => {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route exact path='/' component={App} />
				<Route path='/catalog' component={Catalog} />
			</Switch>
		</Router>
	);
};

export default Routes;
