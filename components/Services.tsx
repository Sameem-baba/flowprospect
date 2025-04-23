const services = [
    {
        title: 'Appointment setting',
        description:
            'Comprehensive B2B appointment booking designed to maximize lead-to-deal conversions. Start securing new opportunities within weeks.',
    },
    {
        title: 'LinkedIn Ads',
        description:
            'Enhance engagement, appointment attendance, and conversion rates with precisely targeted LinkedIn outreach campaigns.',
    },
    {
        title: 'LinkedIn Lead Generation',
        description:
            'Boost your appointment rate by 30% through personalized phone conversations with prospects, turning them into solid deals.',
    },
    {
        title: 'Sales Automation',
        description:
            'Cultivate strong partnerships with high-value accounts using hyper-targeted and personalized outreach strategies.',
    },
    {
        title: 'Web Development',
        description:
            'Increase your sales closing rate by 15% through effective brand development and direct prospect engagement.',
    },
];

export default function ServicesSection() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#003DA5] mb-4">
                    Lead generation services that win clients
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Focus on scaling your business while we deliver a steady stream of
                    pre-qualified business leads directly to your pipeline.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                { services.map((service, index) => (
                    <div
                        key={ index }
                        className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-xl transition duration-300 text-left"
                    >
                        <h3 className="text-xl font-semibold text-[#0061FF] mb-3">
                            { service.title }
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            { service.description }
                        </p>
                    </div>
                )) }
            </div>

            <div className="text-center mt-16">
                <h3 className="text-2xl font-medium text-[#003DA5] mb-4">
                    Unleash your sales potential with our lead generation services
                </h3>
                <button className="mt-2 bg-[#0061FF] cursor-pointer text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#004DCC] transition">
                    Book a call
                </button>
            </div>
        </section>
    );
}
