import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='max-sm:px-1 max-sm:pt-3 max-sm:pb-3 sm:px-1 sm:pt-3 sm:pb-3 md:px-5 md:pt-7.5 md:pb-7.5 lg:px-28 lg:pt-7.5 lg:pb-7.5 xl:px-50 xl:pt-30 xl:pb-7.5 bg-[#101727]'>
            <div className='max-sm:flex max-sm:flex-col max-sm:items-start max-sm:justify-between max-sm:gap-4 sm:flex sm:flex-col sm:items-start sm:justify-between sm:gap-4 md:flex md:flex-row md:flex-wrap md:items-start md:justify-between md:gap-4 lg:flex lg:items-center lg:justify-between xl:flex xl:items-start xl:justify-between mb-20'>
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
            <div className='mt-7.5 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-4 sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-4 md:flex md:flex-row md:flex-wrap md:items-center md:justify-between lg:flex lg:items-center lg:justify-between xl:flex xl:items-center xl:justify-between'>
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