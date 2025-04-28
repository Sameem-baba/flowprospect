/* eslint-disable @next/next/no-img-element */
// components/DemoBookingSection.jsx

export default function DemoBookingSection() {
    return (
        <section className="bg-gray-200 py-16 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left Side */ }
                <div className="max-w-xl">
                    {/* Logo and People Avatars */ }
                    <div className="flex items-center gap-2 mb-6">

                        <div className="flex -space-x-3">
                            <img src="https://funnel.io/hs-fs/hubfs/img_group.png?width=200&height=65&name=img_group.png" alt="Person 1" className="object-contain h-16 rounded-full border-2 border-white" />

                        </div>
                    </div>

                    {/* Heading */ }
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Interested to find out if Flow Prospect can work for you?
                    </h2>

                    {/* Subheading */ }
                    <p className="text-gray-700 mb-6">
                        Book a quick, no-obligation discovery call.
                    </p>

                    {/* Bullet Points */ }
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-green-600 text-xl mr-3">✔️</span>
                            Discuss your needs and challenges
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 text-xl mr-3">✔️</span>
                            Explore the most relevant features of Funnel
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-600 text-xl mr-3">✔️</span>
                            Talk about how to unlock more value from your data
                        </li>
                    </ul>

                    {/* Badges */ }
                    <div className="flex items-center gap-4 mt-8">
                        <img src="https://funnel.io/hubfs/g2_badges.svg" alt="Badge 1" className="h-16" />

                    </div>
                </div>

                {/* Right Side */ }
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        Schedule your free demo
                    </h3>
                    <p className="text-gray-700 mb-6">
                        Please share your email, then select a convenient date and time for your demo.
                    </p>
                    <form className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Work Email*"
                            className="border border-gray-300 p-3 placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition">
                            Get a demo
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}
