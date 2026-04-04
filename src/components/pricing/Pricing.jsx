import { Check } from 'lucide-react';
import React from 'react';

const Pricing = () => {
    return (
        <div className='px-50 py-30 bg-[#FFFFFF]'>
            <h1 className='manrope font-extrabold text-[48px] leading-[auto] tracking-[0%] text-[#101727] text-center mb-4'>Simple Transparent Pricing</h1>
            <p className='manrope font-normal text-[16px] leading-5 tracking-[0%] text-[#627382] text-center mb-10'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className='flex items-center justify-between gap-7.5'>
                <div className='p-6 rounded-2xl bg-[#F9FAFC] border-2 border-[#F2F2F2] w-95 h-full'>
                    <h1 className='manrope font-bold text-[24px] leading-[auto] tracking-[0%] text-[#101727] mb-2'>Starter</h1>
                    <p className='manrope font-normal text-[16px] leading-5 tracking-[0%] text-[#627382] mb-6'>Perfect for getting started</p>
                    <p className='manrope font-bold text-[40px] leading-[auto] tracking-[0%] text-[#101727] mb-6'>$0<span className='manrope font-normal text-[20px] leading-[auto] tracking-[0%] text-[#627382]'>/month</span>
                    </p>
                    <div className='mb-20'>
                        <p className='flex items-center gap-2 manrope font-medium text-[16px] leading-5 tracking-[0%] text-[#627382]'><Check className='text-[#30B868]'></Check>Access to 10 free tools</p>
                        <p className='flex items-center gap-2 manrope font-medium text-[16px] leading-5 tracking-[0%] text-[#627382]'><Check className='text-[#30B868]'></Check>Basic templates</p>
                        <p className='flex items-center gap-2 manrope font-medium text-[16px] leading-5 tracking-[0%] text-[#627382]'><Check className='text-[#30B868]'></Check>Community support</p>
                        <p className='flex items-center gap-2 manrope font-medium text-[16px] leading-5 tracking-[0%] text-[#627382]'><Check className='text-[#30B868]'></Check>1 project per month</p>
                    </div>
                    <button className='px-4 py-3 rounded-[100px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full manrope font-bold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF]'>Get Started Free</button>
                </div>
                <div className='relative'>
                    <p className='px-3 py-1.5 rounded-[1000px] bg-[#FEF3C6] manrope font-medium text-[14px] leading-[auto] tracking-[0%] text-[#BB4D00] w-fit absolute -top-4 right-33'>Most Popular</p>
                    <div className='p-6 rounded-2xl w-95 bg-linear-to-r from-[#4F39F6] to-[#9514FA] h-full'>
                        <h1 className='manrope font-bold text-[24px] leading-[auto] tracking-[0%] text-[#FFFFFF] mb-2'>Starter</h1>
                        <p className='manrope font-normal text-[16px] leading-5 tracking-[0%] text-[#FFFFFF] mb-6 opacity-80'>Perfect for getting started</p>
                        <p className='manrope font-bold text-[40px] leading-[auto] tracking-[0%] text-[#FFFFFF] mb-6'>$29<span className='manrope font-normal text-[20px] leading-[auto] tracking-[0%] text-[#FFFFFF] opacity-80'>/month</span>
                        </p>
                        <div className='mb-20'>
                            <p className='flex items-center gap-2 manrope font-medium text-[16px] leading-5 tracking-[0%] text-[#FFFFFF]'><Check className='text-[#FFFFFF]'></Check>Access to all premium tools</p>
                            <p className='flex items-center gap-2 manrope font-medium text-[16px] leading-5 tracking-[0%] text-[#FFFFFF]'><Check className='text-[#FFFFFF]'></Check>Unlimited templates</p>
                            <p className='flex items-center gap-2 manrope font-medium text-[16px] leading-5 tracking-[0%] text-[#FFFFFF]'><Check className='text-[#FFFFFF]'></Check>Priority support</p>
                            <p className='flex items-center gap-2 manrope font-medium text-[16px] leading-5 tracking-[0%] text-[#FFFFFF]'><Check className='text-[#FFFFFF]'></Check>Unlimited projects</p>
                            <p className='flex items-center gap-2 manrope font-medium text-[16px] leading-5 tracking-[0%] text-[#FFFFFF]'><Check className='text-[#FFFFFF]'></Check>Cloud sync</p>
                            <p className='flex items-center gap-2 manrope font-medium text-[16px] leading-5 tracking-[0%] text-[#FFFFFF]'><Check className='text-[#FFFFFF]'></Check>Advanced analytics</p>
                        </div>
                        <button className='px-4 py-3 rounded-[100px] bg-[#FFFFFF] w-full'><span className='manrope font-bold text-[16px] leading-[auto] tracking-[0%] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text'>Start Pro Trial</span></button>
                    </div>
                </div>
                <div className='p-6 rounded-2xl bg-[#F9FAFC] border-2 border-[#F2F2F2] w-95 h-full'>
                    <h1 className='manrope font-bold text-[24px] leading-[auto] tracking-[0%] text-[#101727] mb-2'>Enterprise</h1>
                    <p className='manrope font-normal text-[16px] leading-5 tracking-[0%] text-[#627382] mb-6'>For teams and businesses</p>
                    <p className='manrope font-bold text-[40px] leading-[auto] tracking-[0%] text-[#101727] mb-6'>$99<span className='manrope font-normal text-[20px] leading-[auto] tracking-[0%] text-[#627382]'>/month</span>
                    </p>
                    <div className='mb-20'>
                        <p className='flex items-center gap-2 manrope font-medium text-[16px] leading-5 tracking-[0%] text-[#627382]'><Check className='text-[#30B868]'></Check>Everything in pro</p>
                        <p className='flex items-center gap-2 manrope font-medium text-[16px] leading-5 tracking-[0%] text-[#627382]'><Check className='text-[#30B868]'></Check>Team collaboration</p>
                        <p className='flex items-center gap-2 manrope font-medium text-[16px] leading-5 tracking-[0%] text-[#627382]'><Check className='text-[#30B868]'></Check>Custom integrations</p>
                        <p className='flex items-center gap-2 manrope font-medium text-[16px] leading-5 tracking-[0%] text-[#627382]'><Check className='text-[#30B868]'></Check>Dedicated support</p>
                        <p className='flex items-center gap-2 manrope font-medium text-[16px] leading-5 tracking-[0%] text-[#627382]'><Check className='text-[#30B868]'></Check>SLA guarantee</p>
                        <p className='flex items-center gap-2 manrope font-medium text-[16px] leading-5 tracking-[0%] text-[#627382]'><Check className='text-[#30B868]'></Check>Custom branding</p>
                    </div>
                    <button className='px-4 py-3 rounded-[100px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full manrope font-bold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF]'>Contact Sales</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing