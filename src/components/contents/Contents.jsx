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

const Contents = ({handleAddToCart, cartItems, handleRemoveFromCart, proceedToCheckout, notify, buy, remove}) => {
    const [isSelected, setIsSelected] = useState('products');
    return (
        <div className='max-sm:px-1 max-sm:py-5 sm:px-1 sm:py-5 md:px-5 md:py-10 lg:px-28 lg:py-10 xl:px-50 xl:py-30 bg-[#FFFFFF]'>
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
                    <div className='max-sm:grid max-sm:grid-cols-1 max-sm:gap-7.5 sm:grid sm:grid-cols-2 sm:gap-7.5 md:grid md:grid-cols-2 md:gap-7.5 lg:grid lg:grid-cols-3 lg:gap-7.5 xl:grid xl:grid-cols-3 xl:gap-7.5'>
                        <Suspense fallback={<div>Loading</div>}>
                            <Products buy={buy} cartItems={cartItems} handleAddToCart={handleAddToCart} allProductsData={allProductsData}></Products>
                        </Suspense>
                    </div>
                    :
                    <div>
                        <Cart remove={remove} notify={notify} proceedToCheckout={proceedToCheckout} cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart}></Cart>
                    </div>
                }
            </div>
        </div>
    );
};

export default Contents;