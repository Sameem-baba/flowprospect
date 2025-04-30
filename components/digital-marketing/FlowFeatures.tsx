import { CheckCircle } from 'lucide-react';

const features = [
    {
        title: "By marketers for marketers",
        description:
            "Funnel empowers marketers to make data-driven decisions and create value for their business. Own your marketing data and use it independent from other teams.",
    },
    {
        title: "Data-driven strategies",
        description:
            "Digital marketing strategies based on accurate and reliable data have a greater impact. Are you ready to show off what you can do?",
    },
    {
        title: "Better return on investment",
        description:
            "Optimizing your ad spend over different channels is easy with Funnel. Spend more time on optimizing campaigns, and less on tedious reporting tasks.",
    },
];

export default function FunnelFeatures() {
    return (
        <section className="bg-white  py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                { features.map((feature, idx) => (
                    <div key={ idx } className="space-y-4">
                        <div className="flex justify-center md:justify-start">
                            <CheckCircle className="w-10 h-10 text-[#003DA5] bg-white rounded-full border-4 border-[#003DA5]" />
                        </div>
                        <h3 className="text-xl font-semibold font-[electrolize] text-black">{ feature.title }</h3>
                        <p className="text-gray-700 font-[roboto]">{ feature.description }</p>
                    </div>
                )) }
            </div>
        </section>
    );
}
