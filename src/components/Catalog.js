import React from 'react';
import products from '../products.js';
import ProductCard from './ProductCard';
import '../styles/Catalog.css';

const Catalog = () => {
	const productComponents = products.map((product) => {
		return <ProductCard data={product} key={product.id} />;
	});

	return (
		<div>
			<h2>Catalog</h2>
			<h3>Products</h3>
			<div className='catalog'>{productComponents}</div>
		</div>
	);
};

export default Catalog;
