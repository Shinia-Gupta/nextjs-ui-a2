import React from 'react'
import Link from 'next/link'

function Footer() {
    const footerData = [
        {
            heading: 'Digital Marketing',
            links: [
                { name: 'Search Engine Optimization', href: '#' },
                { name: 'Pay Per Click', href: '#' },
                { name: 'Search Engine Marketing', href: '#' },
                { name: 'Social Media Marketing', href: '#' },
                { name: 'Email Marketing', href: '#' },
                { name: 'Content Marketing', href: '/content-marketing' }

            ]
        },
        {
            heading: 'Website Services',
            links: [
                { name: 'Web Hosting', href: '#' },
                { name: 'Web Development', href: '#' },
                { name: 'Logo Design', href: '#' },
                { name: 'Web Design', href: '#' },
            ]
        },
        {
            heading: 'Mobile Apps',
            links: [
                { name: 'IOS App', href: '#' },
                { name: 'Android App', href: '#' },
                { name: 'React Native App', href: '#' },
                { name: 'Cross Platform App', href: '#' },
            ]
        },
        {
            heading: 'Video Animation',
            links: [
                { name: 'Video Ads', href: '#' },
                { name: '2D Animation', href: '#' },
                { name: '3D Animation', href: '#' },
                { name: 'Whiteboard Animation', href: '#' },
            ]
        }
    ];

    return (
        <footer className="bg-gradient-to-r from-pink-600 to-pink-950">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                    {footerData.map((section, index) => (
                        <div key={index}>
                            <h2 className="mb-6 text-2xl font-semibold text-white">{section.heading}</h2>
                            <ul className="font-medium">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className="mb-4 text-white text-sm">
                                        <Link href={link.href} className="hover:underline">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
