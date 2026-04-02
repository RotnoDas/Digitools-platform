import React, { useState } from 'react';
import Products from '../cards/Products';
import Cart from '../cards/Cart';

const Contents = () => {
    const [isSelected, setIsSelected] = useState('products');
    return (
        <div className='px-50 py-30 bg-[#FFFFFF]'>
            <div className='flex flex-col items-center justify-center gap-4 mb-10'>
                <h1 className='manrope font-extrabold text-[48px] leading-[auto] tracking-[0%] text-[#101727]'>Premium Digital Tools</h1>
                <p className='manrope font-normal text-[16px] leading-5 tracking-[0%] text-[#627382]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className='p-2 rounded-[100px] bg-[#FFFFFF] border-2 border-[#F6F6F6] space-x-5 flex items-center justify-center'>
                    <button onClick={() => {setIsSelected('products')}} className={isSelected === 'products' ? 'px-4 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-[10000px] inter font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF] drop-shadow-lg' : 'manrope font-medium text-[16px] leading-[auto] tracking-[0%] text-[#25065D]'} >Products</button>
                    <button onClick={() => {setIsSelected('cart')}} className={isSelected === 'cart' ? 'px-4 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-[10000px] inter font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF] drop-shadow-lg' : 'manrope font-medium text-[16px] leading-[auto] tracking-[0%] text-[#25065D]'}>Cart ()</button>
                </div>
            </div>
            <div>
                {
                    isSelected === 'products' ?
                    <div>
                        <Products></Products>
                    </div>
                    :
                    <div>
                        <Cart></Cart>
                    </div>
                }
            </div>
        </div>
    );
};

export default Contents;