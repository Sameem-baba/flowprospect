
import DemoBookingSection from "@/components/home/BookADemo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/home/Hero";
import MarketingEfficiencySection from "@/components/home/MarketingEfficiency";
import OpenConversation from "@/components/home/OpenConversation";
import ServicesSection from "@/components/home/Services";
import Features from "@/components/home/WhyUs";

export default function Home() {
  return (

    <div className="bg-white">
      <Header />
      <Hero />
      <Features />
      <OpenConversation />
      <ServicesSection />
      <MarketingEfficiencySection />
      <DemoBookingSection />

      <Footer />
    </div>
  );
}
