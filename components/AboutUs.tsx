/* eslint-disable @next/next/no-img-element */

function AboutUs() {
    return (
        <div id="aboutus" className="flex flex-col md:flex-row items-center h-screen max-w-7xl mx-auto justify-between w-full px-4 md:px-10 lg:px-16 py-10 gap-8">
            {/* Image Section */ }
            <div className="w-full md:w-2/5">
                <img
                    src="/aboutus.png"
                    alt="The Growing Challenge"
                    className="w-full h-auto max-h-[450px] object-cover rounded-xl"
                />
            </div>

            {/* Text Section */ }
            <div className="w-full md:w-3/5 flex flex-col justify-center text-center md:text-left">
                <div className="text-4xl text-black font-black font-marker">
                    <p>About Us</p>
                    <hr className="my-4 border-t-2 border-gray-300 w-24 mx-auto md:mx-0" />
                </div>

                <p className="text-lg font-normal text-gray-700 leading-relaxed">
                    At Flow Prospect, we know you&apos;re the kind of sales leader who wants to be known for driving new revenue. In order to make a meaningful impact, you need to enable your sales team to create opportunities and close new deals.
                    <br /> <br />

                    The problem is, it&apos;s hard for most sales teams to cut through the noise when it comes to cold outreach — which leads to missed opportunities and growing frustration.

                    <br /> <br />

                    We believe every sales team should feel confident that their outbound strategy is consistent and effective. We understand how disheartening it is to feel like your outreach is being ignored.

                    <br /> <br />

                    That’s why we help sales teams cut through the noise and actually book more meetings with their ICP — using LinkedIn.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
