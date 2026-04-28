import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Destinations from "@/src/components/Destinations";
import Testimonials from "@/src/components/Testimonials";
import About from "@/src/components/About";
import InstagramSection from "@/src/components/InstagramSection";
import Footer from "@/src/components/Footer";
import WhatsAppFloat from "@/src/components/WhatsAppFloat";
import CookieBanner from "@/src/components/CookieBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Testimonials />
      <About />
      <InstagramSection />
      <Footer />
      <WhatsAppFloat />
      <CookieBanner />
    </>
  );
}
