import React from 'react';
import bristro from '../../../assets/home/chef-service.jpg'

const BristoBoos = () => {
    return (
        <div className='relative mb-14'>
            <div className='h-[572px]'>
                <img className='h-[572px]' src={bristro} alt="" />
            </div>
            <div className='h-80 border-2 bg-slate-50 absolute top-28 ml-28 mr-28 py-24 px-40'>
                <h1 className='text-4xl text-center font-bold uppercase mb-4'>Bristro boss</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                
            </div>
        </div>
    );
};

export default BristoBoos;