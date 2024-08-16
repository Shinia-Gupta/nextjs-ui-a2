'use client'
import React, { useState } from 'react'
import Card from './Card'
import Link from 'next/link';
import { Button } from './ui/button';

interface Props {}

function CardsSection(props: Props) {
    const [activeTab, setActiveTab] = useState('Web Design');
    const cardsData = [
        { name: 'Card 1', img: '/images/card1.jpg' },
        { name: 'Card 2', img: '/images/card2.jpg' },
        { name: 'Card 3', img: '/images/card3.jpg' },
        { name: 'Card 4', img: '/images/card4.jpg' },
        { name: 'Card 5', img: '/images/card5.jpg' },
        { name: 'Card 6', img: '/images/card6.jpg' },
        { name: 'Card 7', img: '/images/card7.jpg' },
        { name: 'Card 8', img: '/images/card8.jpg' },
    ]

    return (
        <div className="bg-gray-100 p-8 flex flex-col items-center">
            <div className="flex flex-wrap gap-4 mb-5 justify-center">
                {['Logo Design', 'Stationary', 'Banner Design', 'Brochure Design', 'Web Design', 'Animated Videos', 'Mobile App', 'SEO'].map((tab) => (
                    <div
                        key={tab}
                        className={`px-4 py-2 rounded text-white ${activeTab === tab ? 'bg-pink-500' : 'bg-blue-950'} hover:bg-gray-100 hover:text-pink-500 transition-colors cursor-pointer`}
                        onClick={() => setActiveTab(tab)}
                    >
                        <Link href="#" className="block text-left">
                            {tab}
                        </Link>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
                {cardsData.map((card, index) => (
                    <Card key={index} name={card.name} img={card.img} />
                ))}
            </div>
            <div className='flex space-x-3 mt-5 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <Button className='text-white bg-blue-950 rounded-lg mt-5'>View More</Button>
        </div>
    )
}

export default CardsSection
