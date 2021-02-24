import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../products';
const ProductDetails = () => {
	const { id } = useParams();
	const product = products[id];
	console.log(product);

	return (
		<div>
			<p>Hello Details - {id}</p>
			<img src={product.url} alt='' />
			<p>Name: {product.name}</p>
			<p>Price: {product.price}</p>
			<p>Description: {product.description}</p>
		</div>
	);
};

export default ProductDetails;
