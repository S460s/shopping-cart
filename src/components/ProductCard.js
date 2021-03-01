import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
	const { name, price, url, id } = props.data;
	return (
		<div className='card'>
			<img src={url} alt={name} className='photo' />
			<p>Name: {name}</p>
			<p>Price: {price}$</p>
			{props.amount && <p>Amount: {props.amount}</p>}
			<Link to={`/product/${id}`}>Details</Link>
		</div>
	);
};

export default ProductCard;
