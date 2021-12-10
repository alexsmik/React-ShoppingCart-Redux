import React from 'react';
import ProductItem from "./ProductItem";
import classes from './Products.module.css';

const PRODUCTS = [
    {
        id: 'prod1',
        title: 'One Product',
        price: 2,
        description: 'First product description',
    },
    {
        id: 'prod2',
        title: 'Two Product',
        price: 4,
        description: 'Second prod desc',
    },
    {
        id: 'prod3',
        title: 'Third Product',
        price: 6,
        description: 'Third prodDesc',
    },
];
const Products = () => {
    return (
        <section className={classes.products}>
            <h2>Buy This Products</h2>
            <ul>
                {PRODUCTS.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;