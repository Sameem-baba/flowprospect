/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

function Hero() {
    // Function to handle smooth scrolling
    const handleScrollToSection = () => {
        const section = document.getElementById("aboutus");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center h-screen isolate  px-6 lg:px-8">
            {/* Background Image */ }
            <img
                src="/hero.jpg"
                alt="Background Image"
                className="absolute inset-0 object-cover w-full h-full opacity-70"
            />


            {/* Dark Overlay for Readability */ }
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content Box */ }
            <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center justify-center h-full">
                <div className="text-center">
                    <h1 className="text-5xl font-[electrolize] font-normal tracking-tight text-gray-100 sm:text-7xl">
                        Unlock Growth with Targeted Lead Generation
                    </h1>
                    <p className="mt-8 text-lg font-[roboto] font-medium text-gray-300 sm:text-xl">
                        We don’t just generate leads—we create high-impact sales opportunities that drive measurable ROI and long-term success
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/contact"
                            className="rounded-md font-[electrolize] uppercase tracking-wider bg-[#3366CC] px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-400 transition duration-300"
                        >
                            Book a call
                        </Link>
                        <button
                            onClick={ handleScrollToSection }
                            className="text-sm font-[electrolize] uppercase cursor-pointer tracking-wider font-semibold text-white hover:text-gray-300 transition duration-300"
                        >
                            Learn more <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
