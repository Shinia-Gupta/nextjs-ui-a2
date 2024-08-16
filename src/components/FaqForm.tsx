import React from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

function FaqForm() {
    return (
        <div className="bg-blue-950 flex flex-col justify-center items-center rounded-lg p-1 ">  
            <h1 className='text-white text-xl my-4 font-bold'>Connect With Us!</h1>
            <h2 className='text-white text-sm max-w-md mb-4 text-center'>
                Let's connect to present a cutting edge digital solution for your business.
            </h2> 
            <form className="max-w-sm mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <Input type="text" placeholder="Your Name" className='w-full'/> 
                    <Input type="email" placeholder="Your Email" className='w-full' /> 
                    <Input type="text" placeholder="Your Phone Number" className='w-full' /> 
                    <Input type="url" placeholder="Your Website URL" className='w-full' /> 
                </div>
                <Textarea placeholder="Message (if you have something to ask or tell)" className='mt-3 w-full min-w-96'/>
            </form>
            <Button className='text-white bg-pink-600 rounded-full w-44 my-10'>Submit</Button>

        </div>
    )
}

export default FaqForm
