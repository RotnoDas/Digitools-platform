import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='px-50 pt-30 pb-7.5 bg-[#101727]'>
            <div className='flex items-start justify-between mb-20'>
                <div>
                    <h1 className='manrope font-bold text-[40px] leading-[auto] tracking-[0%] text-[#FFFFFF] mb-4'>DigiTools</h1>
                    <p className='manrope font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF] opacity-80'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='manrope font-medium text-[20px] leading-7 tracking-[0%] text-[#FFFFFF]'>Product</p>
                    <p className='manrope font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF] opacity-80'>Features</p>
                    <p className='manrope font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF] opacity-80'>Pricing</p>
                    <p className='manrope font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF] opacity-80'>Template</p>
                    <p className='manrope font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF] opacity-80'>Integrations</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='manrope font-medium text-[20px] leading-7 tracking-[0%] text-[#FFFFFF]'>Company</p>
                    <p className='manrope font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF] opacity-80'>About</p>
                    <p className='manrope font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF] opacity-80'>Blog</p>
                    <p className='manrope font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF] opacity-80'>Careers</p>
                    <p className='manrope font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF] opacity-80'>Press</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='manrope font-medium text-[20px] leading-7 tracking-[0%] text-[#FFFFFF]'>Resources</p>
                    <p className='manrope font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF] opacity-80'>Documentation</p>
                    <p className='manrope font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF] opacity-80'>Help Center</p>
                    <p className='manrope font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF] opacity-80'>Community</p>
                    <p className='manrope font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF] opacity-80'>Contact</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='manrope font-medium text-[20px] leading-7 tracking-[0%] text-[#FFFFFF]'>Social Links</p>
                    <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center'>
                            <FaInstagram className='text-[#101727]'></FaInstagram>
                        </div>
                        <div className='w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center'>
                            <FaFacebookSquare className='text-[#101727]' />
                        </div>
                        <div className='w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center'>
                            <BsTwitterX className='text-[#101727]' />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='text-[#E5E7EB] border opacity-20' />
            <div className='mt-7.5 flex items-center justify-between'>
                <div>
                    <p className='manrope font-normal text-[16px] leading-6 tracking-[0%] text-[#FAFAFA] opacity-50'>© 2026 Digitools. All rights reserved.</p>
                </div>
                <div className='flex items-center gap-6'>
                    <p className='manrope font-normal text-[16px] leading-6 tracking-[0%] text-[#FAFAFA] opacity-50'>Privacy Policy</p>
                    <p className='manrope font-normal text-[16px] leading-6 tracking-[0%] text-[#FAFAFA] opacity-50'>Terms of Services</p>
                    <p className='manrope font-normal text-[16px] leading-6 tracking-[0%] text-[#FAFAFA] opacity-50'>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;