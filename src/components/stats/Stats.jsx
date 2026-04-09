import React from 'react';

const Stats = () => {
    return (
        <div className='max-sm:px-1 max-sm:py-5 sm:px-1 sm:py-5 md:px-5 md:py-10 lg:px-28 lg:py-10 xl:px-50 xl:py-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center sm:flex sm:flex-col sm:items-center sm:justify-center md:flex md:flex-row md:items-center md:justify-between lg:flex lg:flex-row lg:items-center lg:justify-between xl:flex xl:flex-row xl:items-center xl:justify-between'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='manrope font-extrabold text-[60px] leading-[auto] tracking-[0%] text-[#FFFFFF]'>50K+</h1>
                    <p className='manrope font-medium text-[24px] leading-[auto] tracking-[0%] text-[#FFFFFF] opacity-80'>Active Users</p>
                </div>
                <div className='max-sm:hidden sm:hidden md:block w-0.5 h-16 bg-[#FFFFFF]/50'></div>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='manrope font-extrabold text-[60px] leading-[auto] tracking-[0%] text-[#FFFFFF]'>200+</h1>
                    <p className='manrope font-medium text-[24px] leading-[auto] tracking-[0%] text-[#FFFFFF] opacity-80'>Premium Tools</p>
                </div>
                <div className='max-sm:hidden sm:hidden md:block w-0.5 h-16 bg-[#FFFFFF]/50'></div>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='manrope font-extrabold text-[60px] leading-[auto] tracking-[0%] text-[#FFFFFF]'>4.9</h1>
                    <p className='manrope font-medium text-[24px] leading-[auto] tracking-[0%] text-[#FFFFFF] opacity-80'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;