// components/MarketingEfficiencySection.jsx

export default function MarketingEfficiencySection() {
    return (
        <section
            className="bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center justify-end"
            style={ { backgroundImage: "url('/aboutus.png')" } }
        >
            <div className="w-full md:w-1/2 bg-[#f5f6f7] bg-opacity-90 backdrop-blur-sm p-8 md:p-16">
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    26% <span className="font-normal">increase in marketing efficiency</span>
                </h2>
                <p className="text-gray-700 mb-8 max-w-md">
                    Funnel customers see an average increase in returns on advertising spend of 26% over their first two years of using Funnel<sup>1</sup>.
                </p>
                <button className="bg-black text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-800 transition mb-8">
                    See the benefits for B2C
                </button>
                <p className="text-gray-400 text-xs max-w-md">
                    *Data from a survey conducted by Funnel in July 2024. Aggregate advertising spend and revenue data was collected
                    from 350 participating customers in the eCommerce and retail sector. Marketing efficiency was calculated as the
                    online revenue reported divided by the aggregate advertising spend.
                </p>
            </div>
        </section>
    )
}
