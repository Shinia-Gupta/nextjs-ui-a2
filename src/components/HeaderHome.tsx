import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

function HeaderHome() {
    const companyIcons = [
        { path: '/logos/c1.jpg', name: 'coxendia' },
        { path: '/logos/c2.png', name: 'neonrain' },
        { path: '/logos/c3.jpg', name: 'emito' },
        { path: '/logos/c4.jpg', name: 'codgrow' },
    ];
    return (
        <div className="h-[80vh] w-full bg-[url('/backgrounds/mobile-bg.jpeg')] lg:bg-[url('/backgrounds/home-bg.jpeg')] bg-cover bg-no-repeat relative p-32">
            <div className='absolute mx-20 left-1.5 top-2.5 transform-translate-x-1/2 lg:left-2.5 lg:top-2 flex flex-col items-center lg:items-start text-center lg:text-left'>
                <h5 className='text-lg sm:text-xl md:text-xl lg:text-2xl text-blue-950 font-extrabold'>A DIGITAL AGENCY TO STRATEGICALLY</h5>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-pink-600 font-extrabold'>TRANSFORM</h1>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-950 font-extrabold'>YOUR BRAND</h1>
                <Button className='text-white bg-blue-950 p-4  md:py-3 md:px-6 lg:py-4 lg:p-8 mt-6 lg:mt-8 uppercase font-bold'>Schedule A Call</Button>
                <h2 className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 py-4 mt-2 lg:mt-6'>Interested? Chat with our Real-time Representative now!</h2>
                <div className='flex flex-col items-center lg:items-start'>
                    <div className='flex items-center justify-center lg:justify-start'>
                        <p className='text-xs sm:text-sm md:text-base lg:text-lg text-zinc-800'>5000+&nbsp;</p>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-yellow-300">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>
                        ))}
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg text-zinc-800 mt-2 lg:mt-0'>&nbsp; happy customers rated us at 9/10</p>
                    </div>
                </div>
                <div className='flex flex-wrap items-center justify-between mt-8 '>
 {/* icons */}
 {companyIcons.map((icon, index) => (
     <div key={index} className='mb-10 mr-4 '>
         <Image src={icon.path} width={120} height={80} alt={icon.name} />
     </div>
 ))}
</div>
            </div>
        </div>
    );
}

export default HeaderHome;
