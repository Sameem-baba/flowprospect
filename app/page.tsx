
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import Features from "@/components/WhyUs";

export default function Home() {
  return (

    <div className="bg-white">
      <Header />
      <Hero />
      <Features />
      <ServicesSection />
      <Footer />
    </div>
  );
}
