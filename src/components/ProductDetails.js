import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../products';
const ProductDetails = () => {
	const { id } = useParams();
	const product = products[id];
	const [amount, setAmount] = useState(product.amount);

	const handleBuy = (e) => {
		if (e.target.value > 0) {
			product.amount = e.target.value;
			setAmount(product.amount);
		}
	};

	return (
		<div>
			<img src={product.url} alt='' />
			<p>Name: {product.name}</p>
			<p>Price: {product.price}</p>
			<p>Description: {product.description}</p>
			<p>Amount: {amount}</p>
			<input min='0' type='number' onChange={handleBuy} value={amount} />
		</div>
	);
};

export default ProductDetails;
