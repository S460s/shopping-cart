import React, { useContext } from 'react';
import { ProductsContext } from '../Routes';
import ProductCard from './ProductCard';
import '../styles/Catalog.css';
const Checkout = () => {
	const { products } = useContext(ProductsContext);
	console.log(products);

	const itemComponents = products.items.map((item) => {
		if (item.amount > 0) {
			return <ProductCard data={item} key={item.id} />;
		}
		return null;
	});

	return (
		<div>
			<p>Checkout</p>
			<div className='catalog'>{itemComponents}</div>
			<h4>Total Price: {products.totalPrice()}</h4>
		</div>
	);
};

export default Checkout;
