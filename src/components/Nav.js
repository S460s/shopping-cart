import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../Routes';
import '../styles/Nav.css';
const Nav = () => {
	const { products, count, setCount } = useContext(ProductsContext);
	console.log(products);

	console.log(products.amount());
	return (
		<nav>
			<Link to='/'>
				<span>Home</span>
			</Link>
			<Link to='/catalog'>
				<span>Catalog</span>
			</Link>
			<Link to='/checkout'>
				<span>Cart {count}</span>
			</Link>
		</nav>
	);
};

export default Nav;
