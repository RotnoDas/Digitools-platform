import React from 'react';
import user from '../../assets/user.png';
import packagePic from '../../assets/package.png';
import rocket from '../../assets/rocket.png';

const Features = () => {
    return (
        <div className='max-sm:px-1 max-sm:py-5 sm:px-1 sm:py-5 md:px-5 md:py-10 lg:px-28 lg:py-10 xl:px-50 xl:py-30 bg-[#F9FAFC]'>
            <h1 className='manrope font-extrabold text-[48px] leading-[auto] tracking-[0%] text-[#101727] text-center mb-4'>Get Started in 3 Steps</h1>
            <p className='manrope font-normal text-[16px] leading-5 tracking-[0%] text-[#627382] text-center mb-10'>Start using premium digital tools in minutes, not hours.</p>
            <div className='max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-7.5 sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-7.5 md:flex md:flex-row md:items-center md:justify-center md:gap-7.5 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-7.5 xl:flex xl:items-center xl:justify-between xl:gap-7.5'>
                <div className='h-full w-full p-6 bg-[#FFFFFF] border-2 border-[#F1F1F1] rounded-2xl'>
                    <div className='flex items-center justify-end'>
                        <div className='w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center mb-4'>
                            <p className='manrope font-bold text-[14px] leading-[auto] tracking-[0%] text-[#FFFFFF]'>01</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='w-25 h-25 bg-[#EFEDFF] rounded-full flex items-center justify-center mb-4'>
                            <img src={user} alt="User" />
                        </div>
                    </div>
                    <h1 className='manrope font-bold text-[24px] leading-[auto] tracking-[0%] text-[#101727] mb-4 text-center'>Create Account</h1>
                    <p className='manrope font-normal text-[16px] leading-5 tracking-[0%] text-[#627382] text-center mb-4'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='h-full w-full p-6 bg-[#FFFFFF] border-2 border-[#F1F1F1] rounded-2xl'>
                    <div className='flex items-center justify-end'>
                        <div className='w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center mb-4'>
                            <p className='manrope font-bold text-[14px] leading-[auto] tracking-[0%] text-[#FFFFFF]'>02</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='w-25 h-25 bg-[#EFEDFF] rounded-full flex items-center justify-center mb-4'>
                            <img src={packagePic} alt="User" />
                        </div>
                    </div>
                    <h1 className='manrope font-bold text-[24px] leading-[auto] tracking-[0%] text-[#101727] mb-4 text-center'>Choose Products</h1>
                    <p className='manrope font-normal text-[16px] leading-5 tracking-[0%] text-[#627382] text-center mb-4'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='h-full w-full p-6 bg-[#FFFFFF] border-2 border-[#F1F1F1] rounded-2xl'>
                    <div className='flex items-center justify-end'>
                        <div className='w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center mb-4'>
                            <p className='manrope font-bold text-[14px] leading-[auto] tracking-[0%] text-[#FFFFFF]'>03</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='w-25 h-25 bg-[#EFEDFF] rounded-full flex items-center justify-center mb-4'>
                            <img src={rocket} alt="User" />
                        </div>
                    </div>
                    <h1 className='manrope font-bold text-[24px] leading-[auto] tracking-[0%] text-[#101727] mb-4 text-center'>Start Creating</h1>
                    <p className='manrope font-normal text-[16px] leading-5 tracking-[0%] text-[#627382] text-center mb-4'>Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;