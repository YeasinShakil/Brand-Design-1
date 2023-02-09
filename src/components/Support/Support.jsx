import React from 'react';
import SupportImage from '../../assets/support.jpg';
import { PhoneIcon, ArrowSmallRightIcon, CpuChipIcon, HandRaisedIcon} from '@heroicons/react/24/solid';

const Support = () => {
    return (
        <div name='support' className='w-full mt-24'>
            <div className='w-full h-[780px] bg-gray-800/90 absolute'>
                <img src={SupportImage} alt="" className='w-full h-full object-cover mix-blend-overlay' />
            </div>
            <div className=' max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-3xl text-center uppercase text-slate-300 pt-8'>Support</h2>
                    <h2 className='py-6 text-center text-5xl font-bold '>Finding the right Team</h2>
                    <p className='text-3xl text-center text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia provident, quod totam laboriosam incidunt eveniet facere reprehenderit id explicabo iste.</p>
                </div>
                <div className=' grid lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black mt-[14rem]'>
                    <div className=' bg-white rounded-xl shadow-xl'>
                        <div className='p-8'>
                            <PhoneIcon className=' w-16 p-4 bg-indigo-600 text-white rounded-xl mt-[-4rem]'></PhoneIcon>
                            <h3 className='text-3xl py-4 font-bold text-indigo-600'>Sales</h3>
                            <p className='text-lg text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non reprehenderit dignissimos doloribus tempora rerum vitae!</p>
                        </div>
                        <div className='p-8 py-4 bg-slate-200 text-indigo-600 text-lg '>
                            <p className=' flex'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2'></ArrowSmallRightIcon></p>
                        </div>
                    </div>
                    <div className=' bg-white rounded-xl shadow-xl'>
                        <div className='p-8'>
                            <HandRaisedIcon className=' w-16 p-4 bg-indigo-600 text-white rounded-xl mt-[-4rem]'></HandRaisedIcon>
                            <h3 className='text-3xl py-4 font-bold text-indigo-600'>Technical Support </h3>
                            <p className='text-lg text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non reprehenderit dignissimos doloribus tempora rerum vitae!</p>
                        </div>
                        <div className='p-8 py-4 bg-slate-200 text-indigo-600 text-lg '>
                            <p className=' flex'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2'></ArrowSmallRightIcon></p>
                        </div>
                    </div>
                    <div className=' bg-white rounded-xl shadow-xl'>
                        <div className='p-8'>
                            <CpuChipIcon className=' w-16 p-4 bg-indigo-600 text-white rounded-xl mt-[-4rem]'></CpuChipIcon>
                            <h3 className='text-3xl py-4 font-bold text-indigo-600'>Media Inquiries</h3>
                            <p className='text-lg text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non reprehenderit dignissimos doloribus tempora rerum vitae!</p>
                        </div>
                        <div className='p-8 py-4 bg-slate-200 text-indigo-600 text-lg '>
                            <p className=' flex'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2'></ArrowSmallRightIcon></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;