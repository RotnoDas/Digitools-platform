import React from 'react';
import { Play } from 'lucide-react';
import bannerImage from '../../assets/banner.png';

const Banner = () => {
    return (
        <div className='px-50 py-15 flex items-center justify-between bg-[#FFFFFF]'>
            <div>
                <div className='px-4 py-2 bg-[#E1E7FF] rounded-[1000px] flex items-center gap-1.25 w-fit mb-4'>
                    <div className='w-4 h-4 rounded-lg bg-linear-to-r from-[#4F39F6]/20 to-[#9514FA]/20 flex items-center justify-center'>
                        <div className='w-3 h-3 rounded-lg bg-linear-to-r from-[#4F39F6]/40 to-[#9514FA]/40 flex items-center justify-center'>
                            <div className='w-2 h-2 rounded-lg bg-linear-to-r from-[#4F39F6] to-[#9514FA]'></div>
                        </div>
                    </div>
                    <p className='manrope font-medium text-[16px] leading-[auto] tracking-[0%] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                </div>
                <h1 className='manrope font-extrabold text-[72px] leading-21 tracking-[0%] text-[#101727] mb-4'>Supercharge Your <br /> Digital Workflow</h1>
                <p className='manrope font-normal text-[18px] leading-5 tracking-[0%] text-[#627382] mb-8'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products.</p>
                <div className='flex items-center gap-4'>
                    <button className='px-4 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-[10000px] inter font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF]'>Explore Products</button>
                    <button className='p-0.5 rounded-[100px] bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                        <div className='px-4 py-3 bg-[#FFFFFF] rounded-[100px] flex items-center gap-2'>
                            <Play className='text-[#4F39F6]'></Play>
                            <span className='manrope font-semibold text-[16px] leading-[auto] tracking-[0%] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Watch Demo</span>
                        </div>
                    </button>
                </div>
            </div>
            <div>
                <img src={bannerImage} alt="Banner image" />
            </div>
        </div>
    );
};

export default Banner;