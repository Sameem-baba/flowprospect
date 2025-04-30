import { LineChart, Ruler, ExternalLink } from 'lucide-react';

const steps = [
    {
        icon: <LineChart className="w-10 h-10 text-[#f26a4f]" />,
        title: 'Report',
        description: 'Effortless exploration with great marketing dashboards.',
    },
    {
        icon: <Ruler className="w-10 h-10 text-[#f26a4f]" />,
        title: 'Measure',
        description: 'Marketing effectiveness measured. Outcomes optimized.',
    },
    {
        icon: <ExternalLink className="w-10 h-10 text-[#f26a4f]" />,
        title: 'Export',
        description: 'Get your data into any tool, data warehouse, or platform.',
    },
];

export default function HowFunnelWorks() {
    return (
        <section className="bg-[#003DA5] text-white px-6 py-20">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header and badges */ }
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h2 className="text-5xl font-semibold font-[electrolize] leading-snug">
                        How can you work with Flow Prospect
                    </h2>
                    <div className="flex gap-4 mt-6 md:mt-0">
                        <img src="https://funnel.io/hubfs/g2_badges.svg" alt="Badge 1" className="h-28" />
                    </div>
                </div>

                {/* Steps Grid */ }
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    { steps.map((step, i) => (
                        <div
                            key={ i }
                            className="border border-gray-400 p-6  bg-[#003DA5] space-y-4"
                        >
                            <div>{ step.icon }</div>
                            <h3 className="text-xl font-[electrolize] font-semibold">{ step.title }</h3>
                            <p className="text-gray-300 font-[roboto]">{ step.description }</p>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    );
}
