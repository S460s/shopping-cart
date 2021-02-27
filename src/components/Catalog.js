import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import '../styles/Catalog.css';
import { ProductsContext } from '../Routes';

const Catalog = () => {
	const { products } = useContext(ProductsContext);
	const productComponents = products.items.map((product) => {
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
