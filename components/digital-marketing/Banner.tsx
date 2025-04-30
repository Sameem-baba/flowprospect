'use client';
import Image from 'next/image';

export default function FunnelForMarketers() {
    return (
        <section className="bg-black h-screen flex justify-between items-center text-white px-6 py-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
                {/* Left Content */ }
                <div className="flex-1 space-y-6">
                    <p className="uppercase text-sm tracking-widest font-medium text-gray-400">
                        Flow Prospect for Marketers
                    </p>
                    <h1 className="text-5xl font-bold font-[electrolize] leading-tight">
                        Unlock your full potential
                    </h1>
                    <p className="text-lg text-gray-300 font-[roboto]">
                        Say goodbye to broken dashboards with a marketing data hub. With Funnel, you can have all your data together in one place for analyzing and reporting.
                    </p>
                    <button className="bg-white text-black px-6 py-3 font-[electrolize] font-medium">
                        Get a demo
                    </button>
                </div>

                {/* Right Video Box */ }
                <div className="relative flex-1 w-full">
                    <Image
                        src="/digi-market.jpg" // Replace with your own local path
                        alt="Video thumbnail"
                        width={ 800 }
                        height={ 450 }
                        className="w-full h-auto -lg object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
