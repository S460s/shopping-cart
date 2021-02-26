import React, { useState } from 'react';
import products, { productNum } from '../products.js';
import ProductCard from './ProductCard';
import '../styles/Catalog.css';
import { Link } from 'react-router-dom';

const Catalog = () => {
	const [itemCount, setItemCount] = useState(productNum());

	const productComponents = products.map((product) => {
		return <ProductCard data={product} key={product.id} />;
	});

	return (
		<div>
			<h2>Catalog</h2>
			<Link to='/checkout'>
				<h3>Cart {itemCount}</h3>
			</Link>
			<h3>Products</h3>
			<div className='catalog'>{productComponents}</div>
		</div>
	);
};

export default Catalog;
