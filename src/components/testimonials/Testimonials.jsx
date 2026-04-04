import React from 'react';

const Testimonials = () => {
    return (
        <div className='px-50 py-30 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <h1 className='manrope font-extrabold text-[40px] leading-[auto] tracking-[0%] text-[#FFFFFF] text-center mb-4'>Ready to Transform Your Workflow?</h1>
            <p className='manrope font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF] opacity-90 text-center mb-10'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            <div className='flex items-center justify-center gap-4 mb-4'>
                <button className='px-4 py-3 rounded-[100px] bg-[#FFFFFF]'><span className='manrope font-semibold text-[16px] leading-[auto] tracking-[0%] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text'>Explore Products</span></button>
                <button className='px-4 py-3 rounded-[100px] border-2 border-[#FFFFFF] bg-transparent manrope font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF]'>View Pricing</button>
            </div>
            <p className='manrope font-normal text-[16px] leading-5 tracking-[0%] text-[#FFFFFF] opacity-80 text-center'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Testimonials;