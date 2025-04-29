// components/LeadServicesSimple.tsx

import { PhoneCall, Laptop, MessageSquare, TrendingUp, Users } from "lucide-react";

export default function LeadServicesSimple() {
    const services = [
        {
            title: "Appointment Setting",
            description: "B2B appointment booking designed to maximize lead-to-deal conversions. Secure new opportunities fast.",
            button: "Book Appointments",
            icon: PhoneCall,
            bg: "bg-pink-400",
        },
        {
            title: "LinkedIn Ads",
            description: "Enhance engagement, appointment rates, and conversions with hyper-targeted LinkedIn campaigns.",
            button: "Launch Campaigns",
            icon: MessageSquare,
            bg: "bg-orange-400",
        },
        {
            title: "LinkedIn Lead Generation",
            description: "Boost appointment rates by 30% with personalized outreach and warm prospect conversations.",
            button: "Start Generating Leads",
            icon: Users,
            bg: "bg-blue-400",
        },
        {
            title: "Sales Automation",
            description: "Build strong partnerships with high-value accounts using automated hyper-targeted outreach.",
            button: "Automate Sales",
            icon: TrendingUp,
            bg: "bg-green-400",
        },
        {
            title: "Web Development",
            description: "Increase your closing rate with effective brand development and direct engagement websites.",
            button: "Build Your Website",
            icon: Laptop,
            bg: "bg-gray-400",
        },
        {
            title: "Digital Marketing",
            description: "Maximize your online presence with tailored digital marketing strategies and campaigns.",
            button: "Start Marketing",
            icon: PhoneCall,
            bg: "bg-purple-400",
        }
    ];

    return (
        <section className="bg-black py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold font-[electrolize] text-white mb-4">Power your lead generation</h2>
                <p className="text-gray-400 mb-16 font-[roboto]">Scale your business faster with a steady stream of pre-qualified leads delivered directly to your pipeline.</p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    { services.map((service, index) => (
                        <div
                            key={ index }
                            className={ `${service.bg}  p-8 flex flex-col justify-between` }
                        >
                            <div>
                                <service.icon className="w-8 h-8 text-black mb-6" />
                                <h3 className="text-xl font-bold text-black mb-4 font-[electrolize]">{ service.title }</h3>
                                <p className="text-black text-sm opacity-90 font-[roboto]">{ service.description }</p>
                            </div>
                            <button className="mt-8 bg-black font-[electrolize] text-white text-sm px-4 py-2  hover:bg-gray-800 transition w-max">
                                { service.button } →
                            </button>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    );
}
