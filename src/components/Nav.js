import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';
const Nav = () => {
	return (
		<nav>
			<Link to='/'>
				<span>Home</span>
			</Link>
			<Link to='/catalog'>
				<span>Catalog</span>
			</Link>
		</nav>
	);
};

export default Nav;
