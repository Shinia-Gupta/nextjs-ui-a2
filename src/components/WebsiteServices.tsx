import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

function WebsiteServices() {
    const imageIcons = [
        { path: '/images/strat1.png', name: 'Social media marketing' },
        { path: '/images/strat2.png', name: 'email marketing' },
        { path: '/images/strat3.png', name: 'content marketing' },
        { path: '/images/strat4.png', name: 'logo design' },
        { path: '/images/strat55.png', name: 'web design' },
        { path: '/images/strat6.jpg', name: 'web development' },
    ];

    return (
        <div className='px-10 md:pl-32 md:pr-10'>
            <div className="flex flex-col md:flex-row">
                <div className='max-w-1/2 pt-10'>
                    {/* content  */}
                    <h1 className='uppercase text-blue-950 font-bold text-2xl'>digital strategy agency for website services</h1>
                    <p className='text-gray-400'>Tkdigitals comprises highly talented tech professionals to offer on-ground digital transformation via intricate web design services to our clients across the globe 24/7.
                    We assist as a digital media agency to boost brand visibility and improvise social media rankings on search engines to prosper business success.</p><br/>
                    <Button className='rounded-lg bg-blue-950 text-white uppercase font-bold mr-2'>get a quote</Button>
                    <Button className='rounded-lg bg-gradient-to-r from-pink-600 to-pink-950 text-white uppercase font-bold'>book a call</Button>
                </div>
                <div className='max-w-1/2'>
                    <Image src='/images/stratagy-head.jpg' width={2000} height={400} alt='strategy head image' />
                </div>
            </div>
            {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-8'>
                {imageIcons.map((icon, index) => (
                    <div key={index} className="flex flex-col justify-center items-center">
                        <Image src={icon.path} width={60} height={60} alt={icon.name} />
                        <p className='text-gray-500 mt-4 uppercase font-bold text-center'>{icon.name}</p>
                    </div>
                ))}
            </div> */}
 <div className='flex flex-col md:flex-row justify-between mt-8 '>
 {/* icons */}
 {imageIcons.map((icon, index) => (
     <div key={index} className="flex flex-col justify-center items-center mb-10">
         <Image src={icon.path} width={60} height={60} alt={icon.name} />
         <p className='text-gray-500 mt-4 uppercase font-bold'>{icon.name}</p>
     </div>
 ))}
</div>
</div>
    );
}

export default WebsiteServices;
