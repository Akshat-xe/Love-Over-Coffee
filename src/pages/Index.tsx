import Navbar from "@/components/cafe/Navbar";
import Hero from "@/components/cafe/Hero";
import Highlights from "@/components/cafe/Highlights";
import About from "@/components/cafe/About";
import Experience from "@/components/cafe/Experience";
import MenuSection from "@/components/cafe/MenuSection";
import Gallery from "@/components/cafe/Gallery";
import Reviews from "@/components/cafe/Reviews";
import Contact from "@/components/cafe/Contact";
import Footer from "@/components/cafe/Footer";
import StickyBar from "@/components/cafe/StickyBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Highlights />
      <Experience />
      <MenuSection />
      <About />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <StickyBar />
    </div>
  );
};

export default Index;
