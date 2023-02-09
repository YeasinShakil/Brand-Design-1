import React from 'react';
import bgImage from '../../assets/cyber-bg.png';
import { CloudIcon, ServerIcon, PaperAirplaneIcon, DeviceTabletIcon } from '@heroicons/react/24/solid';

const Hero = () => {
    return (
        <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-center'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md: items-start w-full px-2 py-8'>
                    <p className='text-2xl'>Unique Secquencing & Production</p>
                    <h1 className='text-5xl py-3 md: text-7xl font-bold'>Cloud Managment</h1>
                    <p className=' text-2xl'>This is our Tech Brand</p>
                    <button className='py-3 px-6 sm:w-[60%] my-3'>Get Started</button>
                </div>
                <div>
                    <img src={bgImage} alt="" className='w-full' />
                </div>
                <div className=' absolute w-full flex flex-col text-center bottom-[5%] bg-zinc-300 py-8 mx-1 border border-slate-300 rounded-xl shadow-xl md:left-[50%] transform md:translate-x-[-50%]'>
                    <p className='text-xl font-bold'>Data Services</p>
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className=' flex text-slate-600 px-4 py-2'><CloudIcon className='h-6 text-indigo-600'/> App Security</p>
                        <p className=' flex text-slate-600 px-4 py-2'><ServerIcon className='h-6 text-indigo-600'/> Dashboard Design</p>
                        <p className=' flex text-slate-600 px-4 py-2'><DeviceTabletIcon className='h-6 text-indigo-600'/> DataBase</p>
                        <p className=' flex text-slate-600 px-4 py-2'><PaperAirplaneIcon className='h-6 text-indigo-600'/> API</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;