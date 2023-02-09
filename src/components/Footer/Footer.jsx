import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full bg-slate-900 mt-24 px-6 py-6 text-gray-300'>
            <div className='max-w-[1240px] mx-auto border-b-2 border-gray-600 py-8 grid grid-cols-2 md:grid-cols-6'>
                <div>
                    <h2 className='font-bold uppercase pt-2 pl-4'>Solutions</h2>
                    <ul>
                        <li>Marketing</li>
                        <li>Analytics</li>
                        <li>Data</li>
                        <li>Cloud</li>
                        <li>Commerce</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold uppercase pt-2 pl-4'>Solutions</h2>
                    <ul>
                        <li>Marketing</li>
                        <li>Analytics</li>
                        <li>Data</li>
                        <li>Cloud</li>
                        <li>Commerce</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold uppercase pt-2 pl-4'>Solutions</h2>
                    <ul>
                        <li>Marketing</li>
                        <li>Analytics</li>
                        <li>Data</li>
                        <li>Cloud</li>
                        <li>Commerce</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold uppercase pt-2 pl-4'>Solutions</h2>
                    <ul>
                        <li>Marketing</li>
                        <li>Analytics</li>
                        <li>Data</li>
                        <li>Cloud</li>
                        <li>Commerce</li>
                    </ul>
                </div>
                <div className="col-span-2 pt-6 sm:pt-2">
                    <h3 className='font-bold text-3xl uppercase'>Subscribe to our Newsleter</h3>
                    <p className='text-lg py-5'>The latest news, article and resources, sent to your inbox weakly</p>
                    <form className=' flex flex-col sm:flex-row'>
                        <input type="email" name="" id="" placeholder='example@email.com' className='w-full rounded-md mr-4 p-2 mb-4 border-none text-lg' />
                        <button className='p-2 mb-4'>Subscribe</button>
                    </form>
                </div>
            </div>

            <div className='flex flex-col max-w-[1240px] m-auto justify-between sm:flex-row text-center items-center px-2 py-4'>
                <p>2022 Workflow, LLC, All rights reserved</p>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl w-full'>
                    <FaFacebook></FaFacebook>
                    <FaInstagram></FaInstagram>
                    <FaGithub></FaGithub>
                    <FaLinkedin></FaLinkedin>
                </div>
            </div>

        </div >
    );
};

export default Footer;