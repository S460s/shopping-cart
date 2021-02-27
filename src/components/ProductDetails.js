import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../Routes';
const ProductDetails = () => {
	const { products, setCount } = useContext(ProductsContext);
	const { id } = useParams();

	const product = products.items[id];
	const [amount, setAmount] = useState(product.amount);
	const handleBuy = (e) => {
		if (e.target.value >= 0) {
			product.amount = e.target.value;
			setAmount(product.amount);
			setCount(products.totalAmount());
		}
	};

	return (
		<div>
			<img src={product.url} alt={product.name} />
			<p>Name: {product.name}</p>
			<p>Price: {product.price}</p>
			<p>Description: {product.description}</p>
			<p>Amount: {amount}</p>
			<input min='0' type='number' onChange={handleBuy} value={amount} />
		</div>
	);
};

export default ProductDetails;
