import {
    MapPinIcon,
    EnvelopeIcon
} from '@heroicons/react/24/solid';
import {
    FaTwitter,
    FaLinkedinIn,
    FaInstagram
} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#003DA5] text-white pt-16 pb-6 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

                {/* Address */ }
                <div>
                    <h3 className="text-lg font-semibold mb-4 font-[electrolize]">Address</h3>
                    <div className="flex flex-col items-start gap-2 mb-2">
                        <div className="flex items-start gap-2">
                            <MapPinIcon className="w-5 h-5 mt-1" />

                            <p>

                                123 Innovation Blvd, Suite 400<br />
                                Wilmington, DE 19801 USA<br />

                            </p>
                        </div>

                        <div className="flex items-start gap-2">
                            <MapPinIcon className="w-5 h-5 mt-1" />
                            <p>
                                134 Jammu and Kashmir 193201<br />
                                Sopore India
                            </p>
                        </div>


                    </div>
                    <div className="flex items-center gap-2">
                        <EnvelopeIcon className="w-5 h-5" />
                        <p>info@flowprospect.com</p>
                    </div>
                    <div className="flex gap-4 mt-4 text-xl">
                        <FaTwitter className="hover:text-[#1DA1F2] transition" />
                        <FaLinkedinIn className="hover:text-[#0077B5] transition" />
                        <FaInstagram className="hover:text-[#E1306C] transition" />
                    </div>
                </div>


                {/* Links */ }
                <div>
                    <h3 className="text-lg font-semibold mb-4 font-[electrolize]">Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-[#FFD43B] transition">About</a></li>
                        <li><a href="#" className="hover:text-[#FFD43B] transition">What we Do</a></li>
                        <li><a href="#" className="hover:text-[#FFD43B] transition">Resources</a></li>
                        <li><a href="#" className="hover:text-[#FFD43B] transition">Book a Call</a></li>

                    </ul>
                </div>

                {/* Subscribe */ }
                <div>
                    <h3 className="text-lg font-semibold mb-4 font-[electrolize]">Subscribe</h3>
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="w-full px-4 py-2 rounded-md border border-white bg-transparent text-white placeholder:text-white focus:outline-none mb-4"
                    />
                    <button className="w-full font-[electrolize] bg-[#0061FF] hover:bg-[#004DCC] transition text-white font-semibold py-2 rounded-md">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="border-t border-[#CBD5F7] mt-12 pt-6 text-center text-sm text-[#CBD5F7]">
                <p>© 2025 All Rights Reserved by Flow Prospect</p>
                <div className="flex justify-center gap-6 mt-2">
                    <a href="#" className="hover:text-white">Terms and Conditions</a>
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}
