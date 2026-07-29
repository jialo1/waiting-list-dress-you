import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Ecosystem from "@/components/Ecosystem";
import Showcase from "@/components/Showcase";
import Vision from "@/components/Vision";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <Ecosystem />
      <Showcase />
      <Vision />
      <CTA />
      <Footer />
    </>
  );
}
