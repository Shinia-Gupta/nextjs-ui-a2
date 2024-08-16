'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
    const [activeTab, setActiveTab] = useState('Home');
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="relative flex flex-wrap lg:justify-start lg:flex-nowrap w-full bg-white text-sm py-3">
            <div className="max-w-[85rem] w-full mx-auto px-4 lg:flex lg:items-center lg:justify-between">
                <div className="flex items-center justify-between">
                    <Image src='/logos/tk-logo.png' alt='tk-logo' width={200} height={100} />
                    <div className="lg:hidden">
                        <button
                            type="button"
                            className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50"
                            onClick={() => setIsMobileOpen((prev) => !prev)}
                        >
                            <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" x2="21" y1="6" y2="6" />
                                <line x1="3" x2="21" y1="12" y2="12" />
                                <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                            <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </div>
                <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow lg:block" aria-labelledby="hs-navbar-example-collapse">
                    <div className="flex flex-col gap-5 mt-5 lg:flex-row lg:items-center lg:justify-end lg:mt-0 lg:ps-5">
                        {['Home', 'Services', 'Portfolio', 'About', 'Testimonials', 'Contact', 'Blog'].map((tab) => (
                            <Link
                                key={tab}
                                href="#"
                                className={`font-medium ${activeTab === tab ? 'bg-pink-500 text-white' : 'text-gray-600 hover:text-gray-400'} px-3 py-2 rounded`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {isMobileOpen && (
    <nav
        className={` z-40 bg-white shadow-lg h-screen fixed top-0 right-0 min-w-[240px] py-6 px-4 font-[sans-serif] overflow-auto transform transition-transform duration-700 ease-out ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
        <div className="flex flex-col">
            <button
                onClick={() => setIsMobileOpen((prev) => !prev)}
                className="text-gray-600 self-end mb-6"
            >
                X
            </button>
            {['Home', 'Services', 'Portfolio', 'About', 'Testimonials', 'Contact', 'Blog'].map((tab) => (
                <div
                    key={tab}
                    className={`px-3 py-2 rounded mb-2 ${activeTab === tab ? 'bg-pink-500 text-white' : 'text-gray-600'} hover:bg-gray-100 hover:text-pink-500 transition-colors cursor-pointer`}
                    onClick={() => setActiveTab(tab)}
                >
                    <Link href="#" className="block text-left">
                        {tab}
                    </Link>
                </div>
            ))}
        </div>
    </nav>
)}



        </div>
    );
}

export default Navbar;
