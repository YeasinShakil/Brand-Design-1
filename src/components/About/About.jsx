import React from 'react';

const About = () => {
    return (
        <div name='about' className=' w-full my-32'>
            <div className=' max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h1 className=' font-bold text-5xl'>Trusted by Developers all around the World</h1>
                    <p className='text-3xl py-6 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti mollitia vitae cum nobis, recusandae autem odio assumenda iste dignissimos modi rerum quaerat. Natus, dolorum eaque.</p>
                </div>
                <div className='grid md:grid-cols-3 text-center gap-2 px-2'>
                    <div className=' border rounded-xl shadow-xl py-8'>
                        <p className='text-5xl font-bold text-indigo-600'>100%</p>
                        <p className='text-2xl text-gray-500 mt-2'>Completion</p>
                    </div>
                    <div className=' border rounded-xl shadow-xl py-8'>
                        <p className='text-5xl font-bold text-indigo-600'>24/7</p>
                        <p className='text-2xl text-gray-500 mt-2'>Service</p>
                    </div>
                    <div className=' border rounded-xl shadow-xl py-8'>
                        <p className='text-5xl font-bold text-indigo-600'>100k</p>
                        <p className='text-2xl text-gray-500 mt-2'>Transanction</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;