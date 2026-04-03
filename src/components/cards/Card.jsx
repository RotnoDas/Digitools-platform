import React from 'react';
import { Check } from 'lucide-react';

const Card = ({data, handleAddToCart}) => {
    return (
        <div>
            <div className='p-6 rounded-2xl bg-[#FFFFFF] border-2 border-[#F2F2F2] h-full'>
                <div className='flex items-center justify-end'> 
                    <div className={data.tag === 'best seller' ?
                        'px-3 py-1.5 rounded-[1000px] bg-[#FEF3C6] w-fit' :
                        data.tag === 'new' ?
                        'px-3 py-1.5 rounded-[1000px] bg-[#DBFCE7] w-fit' :
                        'px-3 py-1.5 rounded-[1000px] bg-[#E1E7FF] w-fit'
                    }>
                        <p className={data.tag === 'best seller' ?
                        'manrope font-medium text-[14px] leading-[auto] tracking-[0%] text-[#BB4D00]' :
                        data.tag === 'new' ?
                        'manrope font-medium text-[14px] leading-[auto] tracking-[0%] text-[#0A883E]' : 
                        'manrope font-medium text-[14px] leading-[auto] tracking-[0%] text-[#9514FA]'}>{data.tag}</p>
                    </div>
                </div>
                <div className='w-15 h-15 border border-[#F2F2F2] rounded-full flex items-center justify-center mb-4'>
                    <img className='w-12 h-12' src={data.icon} alt="Icon" />
                </div>
                <div className='flex flex-col items-start justify-start gap-4 mb-4'>
                    <h1 className='manrope font-bold text-[24px] leading-[auto] tracking-[0%] text-[#101727]'>{data.name}</h1>
                    <p className='manrope font-normal text-[16px] leading-5 tracking-[0%] text-[#627382]'>{data.description}</p>
                    <p className='manrope font-bold text-[24px] leading-[auto] tracking-[0%] text-[#101727]'>${data.price}<span className='manrope font-normal text-[16px] leading-[auto] tracking-[0%] text-[#627382]'>/{data.period}</span></p>
                </div>
                <div className='flex flex-col items-start justify-start gap-2 mb-4'>
                    {
                        data.features.map((feature, index) => {
                            return (
                                <p key={index} className='flex items-center gap-2 manrope font-medium text-[16px] leading-5 tracking-[0%] text-[#627382]'><Check className='text-[#30B868]'></Check>{feature}</p>
                            )
                        })
                    }
                </div>
                <button onClick={() => handleAddToCart(data)} className='px-4 py-3 rounded-[100px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] manrope font-bold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF] w-full'>Buy Now</button>
            </div>
        </div>
    );
};

export default Card;