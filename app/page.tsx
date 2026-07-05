import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Competition from "@/components/Competition";
import WhyChoose from "@/components/WhyChoose";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-navy-950">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Competition />
      <WhyChoose />
      <Contact />
      <Footer />
    </main>
  );
}
