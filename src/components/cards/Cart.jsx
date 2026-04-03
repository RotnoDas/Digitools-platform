import React from 'react';
import shoppingCart from '../../assets/shopping-cart.png';
import CartProduct from './CartProduct';

const Cart = ({cartItems, handleRemoveFromCart}) => {
    return (
        <div>
            {cartItems.length === 0 ? (
                <div className='p-10 rounded-2xl bg-[#FFFFFF] border-2 border-[#F2F2F2]'>
                    <h1 className='manrope font-bold text-[24px] leading-[auto] tracking-[0%] text-[#101727]'>Your Cart</h1>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='w-25 h-25'>
                            <img src={shoppingCart} alt="" />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-4 mt-4'>
                            <p className='manrope font-medium text-[16px] leading-5 tracking-[0%] text-[#627382] text-center'>Your cart is empty</p>
                        </div>
                    </div>
                </div>
                ) : (
                    <div className='p-10 rounded-2xl bg-[#FFFFFF] border-2 border-[#F2F2F2]'>
                        <h1 className='manrope font-bold text-[24px] leading-[auto] tracking-[0%] text-[#101727]'>Your Cart</h1>
                        <div>
                            {
                                cartItems.map((cartItem) => {
                                    return (
                                        <CartProduct key={cartItem.id} cartItem={cartItem} handleRemoveFromCart={handleRemoveFromCart}></CartProduct>
                                    )
                                })
                            }
                        </div>
                        <div className='flex items-center justify-between mb-6'>
                            <p className='manrope font-normal text-[16px] leading-[auto] tracking-[0%] text-[#627382]'>Total:</p>
                            <p className='manrope font-bold text-[24px] leading-[auto] tracking-[0%] text-[#101727]'>$29</p>
                        </div>
                        <button className='px-4 py-3 rounded-[100px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full manrope font-bold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF]'>Proceed to Checkout</button>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;