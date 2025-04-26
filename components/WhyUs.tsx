import {
    GlobeAltIcon,
    UserGroupIcon,
    MegaphoneIcon,
    ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

const features = [
    {
        title: 'Increase your sales',
        description: 'Equip your sales team with a consistent flow of qualified leads and scheduled meetings.',
        icon: ArrowTrendingUpIcon
    },
    {
        title: 'Enter new markets',
        description: 'Master the intricacies of new markets and connect with diverse customer segments.',
        icon: GlobeAltIcon
    },
    {
        title: 'Identify potential clients',
        description: 'Locate your target customers and optimize your lead generation processes.',
        icon: UserGroupIcon
    },
    {
        title: 'Introduce your product effectively',
        description: 'Guarantee a successful product launch and enhance market influence.',
        icon: MegaphoneIcon
    }
];

const icons = [
    "/integrations/logo1.svg",
    "/integrations/logo2.svg",
    "/integrations/logo3.svg",
    "/integrations/logo4.svg",
    "/integrations/logo5.svg",
    "/integrations/logo6.svg",
    "/integrations/logo7.svg",
    "/integrations/logo8.svg",
    "/integrations/logo9.svg",
    "/integrations/logo10.svg",
    "/integrations/logo11.svg",
    "/integrations/logo12.svg",
    "/integrations/logo13.svg",
    "/integrations/logo14.svg",
    "/integrations/logo15.svg",
    "/integrations/logo16.svg",
];


export default function FeaturesSection() {

    console.log(icons.length)
    return (
        <section className="bg-[#003DA5]   py-20 px-6">
            <div className="max-w-6xl mx-auto grid border-b border-gray-500 pb-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
                { features.map((feature, index) => (
                    <div key={ index } className="flex flex-col items-start space-y-4">
                        <feature.icon className="h-8 w-8 text-[#FFD43B]" />
                        <h3 className="text-xl font-semibold text-white">{ feature.title }</h3>
                        <p className="text-white text-sm leading-relaxed">{ feature.description }</p>
                    </div>
                )) }
            </div>
            <div className="max-w-6xl flex flex-col items-center mx-auto justify-center mt-20">
                <h2 className="text-xl md:text-2xl font-medium mb-12">
                    Unlocking marketing intelligence for over 2,500 customers
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full lg:grid-cols-5 gap-10 items-center justify-items-center">
                    { [
                        '/logos/adidas.png',
                        '/logos/groupm.png',
                        '/logos/samsung.png',
                        '/logos/hyatt.png',
                        '/logos/publicis.png',
                        '/logos/foxtel.png',
                        '/logos/gojek.png',
                        '/logos/xero.png',
                        '/logos/uber.png',
                        '/logos/spotify.png',
                    ].map((logo, index) => (
                        <img
                            key={ index }
                            src={ `/logos/logo${index + 1}.png` }
                            alt={ `Customer Logo ${index + 1}` }
                            className="h-20 md:h-32 object-contain grayscale hover:grayscale-0 transition duration-300"
                        />
                    )) }
                </div>


            </div>
            <section className=" text-white px-6 md:px-12 lg:px-20 py-20 overflow-hidden relative">
                {/* Top Content */ }
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-12">
                    <div className="max-w-xl">
                        <p className="uppercase text-sm font-semibold text-gray-200 mb-4 tracking-wide">
                            Powerful Integrations
                        </p>
                        <h2 className="text-4xl font-bold mb-4">
                            Unify data without limits
                        </h2>
                        <p className="text-lg text-gray-300 mb-6">
                            With robust integrations from the industry’s largest library of connectors and data destinations, you can reliably gather all your data in one place, without any limitations.
                        </p>
                    </div>

                    <div className="flex flex-row gap-4 shrink-0">
                        <button className="bg-white text-black px-6 py-2 font-semibold rounded">
                            Browse connectors
                        </button>
                        <button className="bg-white text-black px-6 py-2 font-semibold rounded">
                            Browse destinations
                        </button>
                    </div>
                </div>

                {/* Animated Icon Row with Fade */ }
                <div className="relative w-full overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#003DA5] to-transparent z-10 pointer-events-none" />

                    {/* Right Fade */ }
                    <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#003DA5] to-transparent z-10 pointer-events-none" />
                    {/* Animated Scrolling Container */ }
                    <div className="flex w-max animate-scroll gap-6 hover:[animation-play-state:paused]">
                        { [ ...icons, ...icons ].map((src, index) => (
                            <div
                                key={ index }
                                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center p-2 shrink-0"
                            >
                                <img
                                    src={ src }
                                    alt={ `integration-icon-${index}` }
                                    className="max-w-full max-h-full"
                                />
                            </div>
                        )) }
                    </div>
                </div>
            </section>
        </section>
    );
}
