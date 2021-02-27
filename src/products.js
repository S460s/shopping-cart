const products = {
	items: [
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
	],
	totalAmount() {
		return this.items.reduce((acc, product) => acc + +product.amount, 0);
	},
	totalPrice() {
		return this.items.reduce((acc, product) => {
			let itemPrice = 0;
			for (let i = 0; i < +product.amount; i++) {
				itemPrice += +product.price;
			}
			return acc + itemPrice;
		}, 0);
	},
};

const productNum = () => {
	return products.reduce((acc, product) => acc + +product.amount, 0);
};
export { productNum };
export default products;
