import React from 'react';
import { ShoppingCart } from 'lucide-react';

const NavBar = ({cartItems}) => {
    return (
        <div className='max-sm:px-1 max-sm:py-2 sm:px-1 sm:py-2 md:px-5 md:py-2 lg:px-28 lg:py-3 xl:px-50 xl:py-3 bg-[#FFFFFF] border-b border-b-[#F2F2F2] flex items-center justify-between shadow-md'>
            <div>
                <a href="#">
                    <h1 className='max-sm:text-[30px] sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[40px] font-black manrope text-[40px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h1>
                </a>
            </div>
            <div className='max-sm:hidden sm:hidden md:hidden lg:block xl:block'>
                <ul className='flex items-center gap-8'>
                    <li><a href="#" className='manrope font-semibold text-[16px] leading-[120%] tracking-[0%] text-[#101727] opacity-90'>Products</a></li>
                    <li><a href="#" className='manrope font-semibold text-[16px] leading-[120%] tracking-[0%] text-[#101727] opacity-90'>Features</a></li>
                    <li><a href="#" className='manrope font-semibold text-[16px] leading-[120%] tracking-[0%] text-[#101727] opacity-90'>Pricing</a></li>
                    <li><a href="#" className='manrope font-semibold text-[16px] leading-[120%] tracking-[0%] text-[#101727] opacity-90'>Testimonials</a></li>
                    <li><a href="#" className='manrope font-semibold text-[16px] leading-[120%] tracking-[0%] text-[#101727] opacity-90'>FAQ</a></li>
                </ul>
            </div>
            <div className='flex items-center gap-4'>
                <div className='max-sm:flex max-sm:gap-2 sm:flex sm:gap-2 md:flex md:gap-2 lg:flex lg:gap-2'>
                    <ShoppingCart className='text-[#101727]'></ShoppingCart>
                    <p className='bg-red-600 text-[#FFFFFF] w-5 h-5 rounded-full flex items-center justify-center xl:absolute xl:top-5 xl:right-96.25 text-[12px]'>{cartItems.length}</p>
                </div>
                <p className='max-sm:hidden sm:hidden md:hidden lg:hidden xl:block manrope font-semibold text-[16px] leading-[120%] tracking-[0%] text-[#101727] opacity-90'>Login</p>
                <button className='max-sm:hidden sm:hidden md:hidden lg:hidden xl:block px-4 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-[10000px] inter font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF]'>Get Started</button>
            </div>
        </div>
    );
};

export default NavBar;