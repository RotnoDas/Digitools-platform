import React from 'react';
import { ShoppingCart } from 'lucide-react';

const NavBar = () => {
    return (
        <div className='px-50 py-3 bg-[#FFFFFF] border-b border-b-[#F2F2F2] flex items-center justify-between'>
            <div>
                <a href="#">
                    <h1 className='font-black manrope text-[40px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h1>
                </a>
            </div>
            <div>
                <ul className='flex items-center gap-8'>
                    <li><a href="#" className='manrope font-semibold text-[16px] leading-[120%] tracking-[0%] text-[#101727] opacity-90'>Products</a></li>
                    <li><a href="#" className='manrope font-semibold text-[16px] leading-[120%] tracking-[0%] text-[#101727] opacity-90'>Features</a></li>
                    <li><a href="#" className='manrope font-semibold text-[16px] leading-[120%] tracking-[0%] text-[#101727] opacity-90'>Pricing</a></li>
                    <li><a href="#" className='manrope font-semibold text-[16px] leading-[120%] tracking-[0%] text-[#101727] opacity-90'>Testimonials</a></li>
                    <li><a href="#" className='manrope font-semibold text-[16px] leading-[120%] tracking-[0%] text-[#101727] opacity-90'>FAQ</a></li>
                </ul>
            </div>
            <div className='flex items-center gap-4'>
                <ShoppingCart className='text-[#101727]'></ShoppingCart>
                <p className='manrope font-semibold text-[16px] leading-[120%] tracking-[0%] text-[#101727] opacity-90'>Login</p>
                <button className='px-4 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-[10000px] inter font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF]'>Get Started</button>
            </div>
        </div>
    );
};

export default NavBar;