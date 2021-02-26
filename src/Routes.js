import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Nav from './components/Nav';
import Catalog from './components/Catalog';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
const Routes = () => {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route exact path='/' component={App} />
				<Route path='/catalog' component={Catalog} />
				<Route path='/product/:id' component={ProductDetails} />
				<Route path='/checkout' component={Checkout} />
			</Switch>
		</Router>
	);
};

export default Routes;
