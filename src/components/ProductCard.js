import React from 'react';
import '../styles/Card.css';
const ProductCard = (props) => {
	const { name, price, url } = props.data;
	return (
		<div className='card'>
			<img src={url} alt={name} className='photo' />
			<p>Name: {name}</p>
			<p>Price: {price}$</p>
		</div>
	);
};

export default ProductCard;
