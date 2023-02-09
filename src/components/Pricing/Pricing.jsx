import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
const Pricing = () => {
    return (
        <div name='pricing' className='w-full text-white my-24'>
            <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>
            <div className='max-w-[1240px] mx-auto py-12'>
                <div className='text-center py-8 text-slate-300'>
                    <h2 className='text-3xl uppercase'>Pricing</h2>
                    <h3 className='text-5xl font-bold py-8'>The right price for your research.</h3>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maiores modi dolorem, architecto quos dicta illum assumenda ipsum, nostrum ea deleniti! Molestiae vitae deleniti odio?</p>
                </div>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5'>
                    <div className='bg-white text-slate-700 rounded-xl shadow-xl text-center p-8 relative'>
                        <span className='text-sm bg-indigo-400 rounded-2xl py-1 px-4 text-slate-900'>Standard</span>
                        <div>
                            <p className='text-5xl font-bold text-slate-800 py-6'>$49<span className='text-2xl font-normal'>/mo</span></p>
                        </div>
                        <p className='text-2xl py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='text-xl'>
                            <p className='flex py-3 items-center'><CheckIcon className='w-8 mr-5 text-green-500'></CheckIcon>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-3 items-center'><CheckIcon className='w-8 mr-5 text-green-500'></CheckIcon>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-3 items-center'><CheckIcon className='w-8 mr-5 text-green-500'></CheckIcon>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-3 items-center'><CheckIcon className='w-8 mr-5 text-green-500'></CheckIcon>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-3 items-center'><CheckIcon className='w-8 mr-5 text-green-500'></CheckIcon>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-3 items-center'><CheckIcon className='w-8 mr-5 text-green-500'></CheckIcon>Lorem ipsum dolor sit amet.</p>
                            
                            <button className='px-8 py-2 my-4'>Get Started</button>
                        </div>
                    </div>
                    <div className='bg-white text-slate-700 rounded-xl shadow-xl text-center p-8 relative'>
                        <span className='text-sm bg-indigo-400 rounded-2xl py-1 px-4 text-slate-900'>Premium</span>
                        <div>
                            <p className='text-5xl font-bold text-slate-800 py-6'>$99<span className='text-2xl font-normal'>/mo</span></p>
                        </div>
                        <p className='text-2xl py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='text-xl'>
                            <p className='flex py-3 items-center'><CheckIcon className='w-8 mr-5 text-green-500'></CheckIcon>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-3 items-center'><CheckIcon className='w-8 mr-5 text-green-500'></CheckIcon>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-3 items-center'><CheckIcon className='w-8 mr-5 text-green-500'></CheckIcon>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-3 items-center'><CheckIcon className='w-8 mr-5 text-green-500'></CheckIcon>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-3 items-center'><CheckIcon className='w-8 mr-5 text-green-500'></CheckIcon>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-3 items-center'><CheckIcon className='w-8 mr-5 text-green-500'></CheckIcon>Lorem ipsum dolor sit amet.</p>
                            
                            <button className='px-8 py-2 my-4'>Get Started</button>
                        </div>
                    </div>
                    <div className='bg-white text-slate-700 rounded-xl shadow-xl text-center p-8 relative'>
                        <span className='text-sm bg-indigo-400 rounded-2xl py-1 px-4 text-slate-900'>Basic</span>
                        <div>
                            <p className='text-5xl font-bold text-slate-800 py-6'>$29<span className='text-2xl font-normal'>/mo</span></p>
                        </div>
                        <p className='text-2xl py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='text-xl'>
                            <p className='flex py-3 items-center'><CheckIcon className='w-8 mr-5 text-green-500'></CheckIcon>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-3 items-center'><CheckIcon className='w-8 mr-5 text-green-500'></CheckIcon>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-3 items-center'><CheckIcon className='w-8 mr-5 text-green-500'></CheckIcon>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-3 items-center'><CheckIcon className='w-8 mr-5 text-green-500'></CheckIcon>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-3 items-center'><CheckIcon className='w-8 mr-5 text-green-500'></CheckIcon>Lorem ipsum dolor sit amet.</p>
                            <p className='flex py-3 items-center'><CheckIcon className='w-8 mr-5 text-green-500'></CheckIcon>Lorem ipsum dolor sit amet.</p>
                            
                            <button className='px-8 py-2 my-4'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;