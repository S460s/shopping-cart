import './styles/App.css';
import { ProductsContext } from './Routes';
import { useContext } from 'react';
function App() {
	const { products } = useContext(ProductsContext);
	console.log(products);
	return (
		<div className='App'>
			<h1>Home</h1>
			<p>An amazing shop </p>
			<p>{products.amount()}</p>
		</div>
	);
}

export default App;
