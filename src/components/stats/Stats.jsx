import React from 'react';

const Stats = () => {
    return (
        <div className='px-50 py-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='manrope font-extrabold text-[60px] leading-[auto] tracking-[0%] text-[#FFFFFF]'>50K+</h1>
                    <p className='manrope font-medium text-[24px] leading-[auto] tracking-[0%] text-[#FFFFFF] opacity-80'>Active Users</p>
                </div>
                <div className='w-0.5 h-16 bg-[#FFFFFF]/50'></div>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='manrope font-extrabold text-[60px] leading-[auto] tracking-[0%] text-[#FFFFFF]'>200+</h1>
                    <p className='manrope font-medium text-[24px] leading-[auto] tracking-[0%] text-[#FFFFFF] opacity-80'>Premium Tools</p>
                </div>
                <div className='w-0.5 h-16 bg-[#FFFFFF]/50'></div>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='manrope font-extrabold text-[60px] leading-[auto] tracking-[0%] text-[#FFFFFF]'>4.9</h1>
                    <p className='manrope font-medium text-[24px] leading-[auto] tracking-[0%] text-[#FFFFFF] opacity-80'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;