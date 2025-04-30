/* eslint-disable @next/next/no-img-element */
import FunnelForMarketers from "@/components/digital-marketing/Banner";
import FunnelFeatures from "@/components/digital-marketing/FlowFeatures";
import HowFunnelWorks from "@/components/digital-marketing/HowFunnelWorks";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const icons = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
    "/logos/logo7.png",
    "/logos/logo8.png",
    "/logos/logo9.png",
    "/logos/logo10.png",
];

function DigitalMarketingPage() {
    return <div className="bg-gray-500">
        <Header />
        <FunnelForMarketers />
        <div className="relative w-full overflow-hidden bg-gray-500 max-w-7xl mx-auto py-5">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-500 to-transparent z-10 pointer-events-none" />

            {/* Right Fade */ }
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-500 to-transparent z-10 pointer-events-none" />
            {/* Animated Scrolling Container */ }
            <div className="flex w-max animate-scroll gap-6 hover:[animation-play-state:paused]">
                { [ ...icons, ...icons, ...icons ].map((src, index) => (
                    <div
                        key={ index }
                        className="w-32 h-32 md:w-16 md:h-16  flex items-center justify-center shrink-0"
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
        <FunnelFeatures />
        <HowFunnelWorks />
        <Footer />
    </div>;
}
export default DigitalMarketingPage;
