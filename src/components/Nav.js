import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../Routes';
import '../styles/Nav.css';
const Nav = () => {
	const [itemCount, setItemCount] = useState(0);

	return (
		<nav>
			<Link to='/'>
				<span>Home</span>
			</Link>
			<Link to='/catalog'>
				<span>Catalog</span>
			</Link>
			<Link to='/checkout'>
				<span>Cart {itemCount}</span>
			</Link>
		</nav>
	);
};

export default Nav;
