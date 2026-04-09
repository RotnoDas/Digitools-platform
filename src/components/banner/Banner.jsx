import React from 'react';
import { Play } from 'lucide-react';
import bannerImage from '../../assets/banner.png';

const Banner = () => {
    return (
        <div className='max-sm:px-1 max-sm:py-5 sm:px-1 sm:py-5 md:px-5 md:py-10 lg:px-28 lg:py-10 xl:px-50 xl:py-15 flex items-center justify-between bg-[#FFFFFF]'>
            <div className='max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center sm:w-full sm:flex sm:flex-col sm:items-center sm:justify-center md:w-full md:flex md:flex-col md:items-center md:justify-center lg:w-full lg:flex lg:flex-col lg:items-center lg:justify-center xl:w-1/2 xl:flex xl:flex-col xl:items-start xl:justify-start'>
                <div>
                    <div className='px-4 py-2 bg-[#E1E7FF] rounded-[1000px] flex items-center gap-1.25 w-fit mb-4'>
                        <div className='w-4 h-4 rounded-lg bg-linear-to-r from-[#4F39F6]/20 to-[#9514FA]/20 flex items-center justify-center'>
                            <div className='w-3 h-3 rounded-lg bg-linear-to-r from-[#4F39F6]/40 to-[#9514FA]/40 flex items-center justify-center'>
                                <div className='w-2 h-2 rounded-lg bg-linear-to-r from-[#4F39F6] to-[#9514FA]'></div>
                            </div>
                        </div>
                        <p className='manrope font-medium text-[16px] leading-[auto] tracking-[0%] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                    </div>
                </div>
                <h1 className='max-sm:text-center max-xl:text-center manrope font-extrabold text-[72px] leading-21 tracking-[0%] text-[#101727] mb-4'>Supercharge Your <br /> Digital Workflow</h1>
                <p className='max-xl:text-center manrope font-normal text-[18px] leading-5 tracking-[0%] text-[#627382] mb-8'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products.</p>
                <div className='max-lg:flex max-lg:items-center max-lg:justify-center flex items-center gap-4'>
                    <button className='px-4 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-[10000px] inter font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF]'>Explore Products</button>
                    <button className='p-0.5 rounded-[100px] bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                        <div className='px-4 py-3 bg-[#FFFFFF] rounded-[100px] flex items-center gap-2'>
                            <Play className='text-[#4F39F6]'></Play>
                            <span className='manrope font-semibold text-[16px] leading-[auto] tracking-[0%] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Watch Demo</span>
                        </div>
                    </button>
                </div>
            </div>
            <div className='max-sm:hidden sm:hidden md:hidden lg:hidden xl:block'>
                <img src={bannerImage} alt="Banner image" />
            </div>
        </div>
    );
};

export default Banner;