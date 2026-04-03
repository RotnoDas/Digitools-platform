import React from 'react';

const CartProductPrice = ({cartItems}) => {
    const total = cartItems.reduce((acc, item) => {
        return acc + item.price;
    }, 0);
    return (
        <p className='manrope font-bold text-[24px] leading-[auto] tracking-[0%] text-[#101727]'>${total.toFixed(2)}</p>
    );
};

export default CartProductPrice;