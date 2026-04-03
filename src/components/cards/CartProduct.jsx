import React from 'react';

const CartProduct = ({cartItem, handleRemoveFromCart, remove}) => {
    return (
        <div>
            <div className='mt-6 mb-6'>
                <div className='p-5 rounded-2xl bg-[#F9FAFC] flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <div className='w-15 h-15 bg-[#FFFFFF] border border-[#F2F2F2] rounded-full flex items-center justify-center'>
                            <img className='w-12 h-12' src={cartItem.icon} alt="Icon" />
                        </div>
                        <div>
                            <h1 className='manrope font-semibold text-[20px] leading-[auto] tracking-[0%] text-[#101727]'>{cartItem.name}</h1>
                            <p className='manrope font-medium text-[16px] leading-5 tracking-[0%] text-[#627382]'>${cartItem.price}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => {
                            handleRemoveFromCart(cartItem.id);
                            remove();
                        }} className='manrope font-bold text-[16px] leading-[auto] tracking-[0%] text-[#FF3980]'>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;