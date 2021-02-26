import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../products';
const ProductDetails = () => {
	const { id } = useParams();
	const product = products[id];
	const [amount, setAmount] = useState(product.amount);

	const handleBuy = () => {
		product.amount++;
		setAmount(product.amount);
	};

	return (
		<div>
			<img src={product.url} alt='' />
			<p>Name: {product.name}</p>
			<p>Price: {product.price}</p>
			<p>Description: {product.description}</p>
			<p>Amount: {amount}</p>
			<button onClick={handleBuy}>+</button>
		</div>
	);
};

export default ProductDetails;
