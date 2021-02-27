import React, { useContext } from 'react';
import { ProductsContext } from '../Routes';
import ProductCard from './ProductCard';
import '../styles/Catalog.css';
const Checkout = () => {
	const { products, setCount } = useContext(ProductsContext);
	console.log(products);

	const itemComponents = products.items.map((item) => {
		if (item.amount > 0) {
			return <ProductCard data={item} key={item.id} />;
		}
		return null;
	});

	const handleCheckout = () => {
		alert(
			`Thanks for shopping! Your total spending is ${products.totalPrice()} .`
		);
		products.items.forEach((item) => {
			item.amount = 0;
		});
		setCount(products.totalAmount());
	};

	return (
		<div>
			<p>Checkout</p>
			<div className='catalog'>{itemComponents}</div>
			<h4>Total Price: {products.totalPrice()}</h4>
			<button onClick={handleCheckout}>Checkout</button>
		</div>
	);
};

export default Checkout;
