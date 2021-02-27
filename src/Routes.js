import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Nav from './components/Nav';
import Catalog from './components/Catalog';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import products from './products';

const ProductsContext = createContext();
const Routes = () => {
	const [count, setCount] = useState(0);
	return (
		<Router>
			<ProductsContext.Provider value={{ products, count, setCount }}>
				<Nav />
				<Switch>
					<Route exact path='/'>
						<App />
					</Route>
					<Route path='/catalog'>
						<Catalog />
					</Route>
					<Route path='/product/:id'>
						<ProductDetails />
					</Route>
					<Route path='/checkout'>
						<Checkout />
					</Route>
				</Switch>
			</ProductsContext.Provider>
		</Router>
	);
};
export { ProductsContext };
export default Routes;
