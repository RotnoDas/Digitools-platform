import React, { use } from 'react';
import Card from './Card';

const Products = ({allProductsData, handleAddToCart, cartItems, buy}) => {
    const allData = use(allProductsData);
    return (
        <>
            {
                allData.map((data) => {
                    const isInCart = cartItems.some((item) => {
                        return item.id === data.id;
                    })
                    return (
                        <Card buy={buy} isInCart={isInCart} handleAddToCart={handleAddToCart} key={data.id} data={data}></Card>
                    )
                })
            }
        </>
    );
};

export default Products;