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

export default function FeaturesSection() {
    return (
        <section className="bg-[#003DA5] py-20 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
                { features.map((feature, index) => (
                    <div key={ index } className="flex flex-col items-start space-y-4">
                        <feature.icon className="h-8 w-8 text-[#FFD43B]" />
                        <h3 className="text-xl font-semibold text-white">{ feature.title }</h3>
                        <p className="text-white text-sm leading-relaxed">{ feature.description }</p>
                    </div>
                )) }
            </div>
        </section>
    );
}
