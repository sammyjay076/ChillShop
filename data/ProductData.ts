interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    description: "This is the description for Product 1.",
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
    description: "This is the description for Product 2.",
  },
  // Add more products here...
];

export default products;
