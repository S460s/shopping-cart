const products = [
	{
		name: 'Random item 1',
		url: 'https://picsum.photos/id/1/200/300',
		amount: 0,
		price: 12,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maiores facilis voluptatem dicta? Doloribus molestias quod rem quasi, ab enim? Quos hic impedit id quia dolore at dicta facilis qui.',
		id: 0,
	},
	{
		name: 'Random item 2',
		url: 'https://picsum.photos/id/2/200/300',
		amount: 0,
		price: 20,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maiores facilis voluptatem dicta? Doloribus molestias quod rem quasi, ab enim? Quos hic impedit id quia dolore at dicta facilis qui.',
		id: 1,
	},
	{
		name: 'Random item 3',
		url: 'https://picsum.photos/id/3/200/300',
		amount: 0,
		price: 32,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maiores facilis voluptatem dicta? Doloribus molestias quod rem quasi, ab enim? Quos hic impedit id quia dolore at dicta facilis qui.',
		id: 2,
	},
	{
		name: 'Random item 4',
		url: 'https://picsum.photos/id/4/200/300',
		amount: 0,
		price: 29,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maiores facilis voluptatem dicta? Doloribus molestias quod rem quasi, ab enim? Quos hic impedit id quia dolore at dicta facilis qui.',
		id: 3,
	},
];

const productNum = () => {
	let num = products.reduce((acc, product) => {
		return acc + product.amount;
	}, 0);
	return num;
};
export { productNum };
export default products;
