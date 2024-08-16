import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image';



function CustomizedSoln() {

    const imageIcons = [
        { path: '/images/sol1.png', name: 'paying customers icon', desc:"WILLING TO TURN PROSPECTS INTO PAYING CUSTOMERS WE'RE HERE TO PULL THE JOB",dialogue:"We'll do it for you" },
        { path: '/images/sol2.png', name: 'dynamic website icon',desc:"LOOKING FOR A DYNAMIC WEBSITE? WE'RE THE TOP-RATED AGENCY FOR IT",dialogue:"We're the best people for the job!" },
        { path: '/images/sol3.png', name: 'unique website icon',desc:"WANT TO MAKE YOUR WEBSITE STAND OUT AS A RESOURCEFUL EXAMPLE?",dialogue:"We'll make it happen!" },
           ];
    return (
      <div className='flex flex-col space-y-16 md:space-y-40'>
        <div className='flex flex-col justify-center items-center space-y-3'>
            {/* top div  */}
<h1 className=' text-pink-500 font-bold text-xl text-center'>Searching for a customized Solution?</h1>
<h1 className='uppercase text-blue-950 font-bold text-2xl text-center'>a customized package & quote is just a click away!</h1>
<Button className='rounded-lg bg-blue-950 text-white uppercase font-bold'>see how it works</Button>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mx-20">
            {/* bottom div  */}
            {imageIcons.map((icon, index) => (
     <div key={index} className="flex flex-col justify-center items-center mb-10">
         <Image src={icon.path} width={100} height={60} alt={icon.name} />
         <p className='text-gray-900 text-sm mt-4 uppercase font-bold max-w-64 text-center'>{icon.desc}</p>
         <p className='text-pink-500 text-sm'>{icon.dialogue}</p>
     </div>
 ))}
        </div>
      </div>  
    )
}

export default CustomizedSoln
