import React, { useContext } from 'react';
import { ProductsContext } from '../Routes';
import ProductCard from './ProductCard';

const Checkout = () => {
	const { products, setCount } = useContext(ProductsContext);

	const itemComponents = products.items.map((item) => {
		if (item.amount > 0) {
			return <ProductCard data={item} amount={item.amount} key={item.id} />;
		}
		return null;
	});

	const handleCheckout = () => {
		alert(
			`Thanks for shopping! Your total spending is ${products.totalPrice()} .`
		);
		products.resetAmount();
		setCount(products.totalAmount());
	};

	const noItems = (
		<div>
			<p>No items in cart</p>
		</div>
	);

	const items = (
		<div>
			<div className='catalog'>{itemComponents}</div>
			<h4>Total Price: {products.totalPrice()}$</h4>
			<button className='checkoutBtn' onClick={handleCheckout}>
				Checkout
			</button>
		</div>
	);

	return (
		<div>
			<p>Checkout</p>
			{products.totalAmount() > 0 ? items : noItems}
		</div>
	);
};

export default Checkout;
