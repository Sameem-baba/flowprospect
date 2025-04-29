/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Framer Motion for animations

const data = [
    {
        id: "startups",
        title: "Marketing Automation",
        short: "Focus on product — let us handle your pipeline",
        bullets: [
            "Instantly build a qualified sales pipeline without in-house hires",
            "Focus on product and closing, while we handle prospecting",
            "Kickstart market expansion with warm leads",
        ],
        percent: "Ready to Grow",
        subtitle: "without the hiring delays",
        quote:
            "We enable startups to scale their outreach instantly, helping them prioritize closing and expansion while we deliver warm, qualified leads.",
        author: "Your Sales Partner",
        role: "Startup Growth Specialist",
        company: "SalesPros",
        avatar: "/avatar-startups.png",
    },
    {
        id: "growing",
        title: "Growing Businesses",
        short: "Expand with consistent, high-quality outreach",
        bullets: [
            "Expand into new markets with consistent, high-quality outreach",
            "Book meetings with decision-makers, not just gatekeepers",
            "Boost brand authority through targeted LinkedIn engagement",
        ],
        percent: "Expand Your Reach",
        subtitle: "and strengthen your market hold",
        quote:
            "Growing businesses leverage our targeted strategies to consistently enter new markets, engage decision-makers, and build long-term brand authority.",
        author: "Growth Advisor",
        role: "Business Development Lead",
        company: "SalesPros",
        avatar: "/avatar-growing.png",
    },
    {
        id: "enterprise",
        title: "Sales Prospecting",
        short: "Pre-qualified meetings, at scale",
        bullets: [
            "Fuel your sales teams with pre-qualified meetings at scale",
            "Improve sales efficiency with automated, personalized outreach",
            "Integrate seamlessly with your CRM and workflows",
        ],
        percent: "Enterprise Power",
        subtitle: "personalized at scale",
        quote:
            "Enterprise teams use our system to supercharge their sales force — combining precision targeting, automation, and CRM integration for massive efficiency gains.",
        author: "Enterprise Strategist",
        role: "Director of Enterprise Solutions",
        company: "SalesPros",
        avatar: "/avatar-enterprise.png",
    },
];

export default function OpenConversation() {
    const [ selected, setSelected ] = useState("startups");
    const current = data.find((d) => d.id === selected);

    return (
        <section className="bg-[#f7f9fa] text-black py-16 px-6 md:px-12 lg:px-24">
            {/* Heading */ }
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold font-[electrolize] mb-4">Open the conversation</h2>
                <p className="text-gray-500 text-lg">
                    Working with us opens direct, quality channels to your future clients. Whether you&apos;re a startup, growing business, or an enterprise team — we power your sales growth.
                </p>
            </div>

            {/* Main Grid */ }
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {/* Left Tabs */ }
                <div className="flex flex-col gap-6 relative">
                    { data.map((item) => (
                        <div
                            key={ item.id }
                            onClick={ () => setSelected(item.id) }
                            className={ `cursor-pointer rounded-lg border p-6 relative transition ${selected === item.id
                                ? "bg-white border-[#3366CC]"
                                : "bg-[#f7f9fa] border-gray-200"
                                }` }
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div
                                    className={ `${selected === item.id ? "text-[#3366CC]" : "text-black"
                                        }` }
                                >
                                    {/* Same simple icon for all */ }
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 4.69 2 8v8c0 3.31 4.48 6 10 6s10-2.69 10-6V8c0-3.31-4.48-6-10-6zM4 8c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3zm8 11c-4.42 0-8-1.79-8-4v-2c1.66 1.24 4.11 2 8 2s6.34-.76 8-2v2c0 2.21-3.58 4-8 4z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold font-[electrolize]">{ item.title }</h3>
                            </div>

                            {/* Descriptions */ }
                            { selected === item.id ? (
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    { item.bullets.map((point, idx) => (
                                        <li key={ idx }>{ point }</li>
                                    )) }
                                </ul>
                            ) : (
                                <p className="text-gray-700">{ item.short }</p>
                            ) }

                            {/* Animated underline */ }
                            { selected === item.id && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute bottom-0 left-0 h-[2px] w-full bg-[#3366CC]"
                                />
                            ) }
                        </div>
                    )) }
                </div>

                {/* Right Content */ }
                <div className="bg-white border rounded-lg p-8 flex flex-col justify-between min-h-fit relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={ current?.id }
                            initial={ { opacity: 0, y: 10 } }
                            animate={ { opacity: 1, y: 0 } }
                            exit={ { opacity: 0, y: -10 } }
                            transition={ { duration: 0.4 } }
                        >
                            <div>
                                <h3 className="text-4xl font-bold mb-2 font-[electrolize]">{ current?.percent }</h3>
                                <p className="text-gray-700 mb-6">{ current?.subtitle }</p>
                                <p className="text-gray-600 mb-8">“{ current?.quote }”</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <img src={ current?.avatar } alt={ current?.author } className="w-10 h-10 rounded-full bg-gray-200" />
                                <div>
                                    <p className="font-semibold font-[electrolize]">{ current?.author }</p>
                                    <p className="text-gray-500 text-sm">{ current?.role }</p>
                                    <p className="text-gray-500 text-sm">{ current?.company }</p>
                                </div>
                            </div>

                            <div className="mt-6 text-right">
                                <a href="#" className="text-black font-[electrolize] font-semibold  flex items-center justify-end gap-2">
                                    Read the case study
                                    <span className="text-lg">&rarr;</span>
                                </a>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
