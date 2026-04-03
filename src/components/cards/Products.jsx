import React, { use } from 'react';
import Card from './Card';

const Products = ({allProductsData, handleAddToCart}) => {
    const allData = use(allProductsData);
    return (
        <>
            {
                allData.map((data) => {
                    return (
                        <Card handleAddToCart={handleAddToCart} key={data.id} data={data}></Card>
                    )
                })
            }
        </>
    );
};

export default Products;