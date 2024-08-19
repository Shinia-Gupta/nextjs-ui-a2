    import Link from 'next/link';

    const StickyButton = () => {
        return (
            <Link
                href="#start"
                className="z-50 fixed -right-16 md:-right-20 top-1/2 transform -translate-y-1/2 -rotate-90 bg-pink-500 text-white py-3 px-6 rounded-lg text-lg font-bold shadow-lg transition-transform hover:bg-pink-700 hover:translate-x-[-3px]"
            >
                Let&apos;s Get Started
            </Link>
        );
    };

    export default StickyButton;
