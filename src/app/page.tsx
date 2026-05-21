import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollRevealInit from "@/components/ScrollRevealInit";

export default function Home() {
  return (
    <>
      <div id="scroll-progress" />
      <ScrollRevealInit />
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <About />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
