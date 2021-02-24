import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Nav from './components/Nav';
import Catalog from './components/Catalog';
import ProductDetails from './components/ProductDetails';

const Routes = () => {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route exact path='/' component={App} />
				<Route path='/catalog' component={Catalog} />
				<Route path='/product/:id' component={ProductDetails} />
			</Switch>
		</Router>
	);
};

export default Routes;
