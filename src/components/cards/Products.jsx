import React, { use } from 'react';
import Card from './Card';

const Products = ({allProductsData}) => {
    const allData = use(allProductsData);
    return (
        <>
            {
                allData.map((data) => {
                    return (
                        <Card key={data.id} data={data}></Card>
                    )
                })
            }
        </>
    );
};

export default Products;