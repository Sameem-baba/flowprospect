
import DemoBookingSection from "@/components/BookADemo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OpenConversation from "@/components/OpenConversation";
import ServicesSection from "@/components/Services";
import Features from "@/components/WhyUs";

export default function Home() {
  return (

    <div className="bg-white">
      <Header />
      <Hero />
      <Features />
      <OpenConversation />
      <ServicesSection />
      <DemoBookingSection />

      <Footer />
    </div>
  );
}
