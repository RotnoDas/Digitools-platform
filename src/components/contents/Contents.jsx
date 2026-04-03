import React, { useState } from 'react';
import { Suspense } from 'react';
import Products from '../cards/Products';
import Cart from '../cards/Cart';

const dataUrl = '/data.json';
const productsData = async() => {
    try {
        const response = await fetch(dataUrl);
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.log('Error fetching data: ', error);
    }
}
const allProductsData = productsData();

const Contents = ({handleAddToCart, cartItems, handleRemoveFromCart}) => {
    const [isSelected, setIsSelected] = useState('products');
    return (
        <div className='px-50 py-30 bg-[#FFFFFF]'>
            <div className='flex flex-col items-center justify-center gap-4 mb-10'>
                <h1 className='manrope font-extrabold text-[48px] leading-[auto] tracking-[0%] text-[#101727]'>Premium Digital Tools</h1>
                <p className='manrope font-normal text-[16px] leading-5 tracking-[0%] text-[#627382]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className='p-2 rounded-[100px] bg-[#FFFFFF] border-2 border-[#F6F6F6] space-x-5 flex items-center justify-center'>
                    <button onClick={() => {setIsSelected('products')}} className={isSelected === 'products' ? 'px-4 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-[10000px] inter font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF] drop-shadow-lg' : 'manrope font-medium text-[16px] leading-[auto] tracking-[0%] text-[#25065D]'} >Products</button>
                    <button onClick={() => {setIsSelected('cart')}} className={isSelected === 'cart' ? 'px-4 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-[10000px] inter font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF] drop-shadow-lg' : 'manrope font-medium text-[16px] leading-[auto] tracking-[0%] text-[#25065D]'}>Cart ({cartItems.length})</button>
                </div>
            </div>
            <div>
                {
                    isSelected === 'products' ?
                    <div className='grid grid-cols-3 gap-7.5'>
                        <Suspense fallback={<div>Loading</div>}>
                            <Products cartItems={cartItems} handleAddToCart={handleAddToCart} allProductsData={allProductsData}></Products>
                        </Suspense>
                    </div>
                    :
                    <div>
                        <Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart}></Cart>
                    </div>
                }
            </div>
        </div>
    );
};

export default Contents;