import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Stats from "@/components/landing/Stats";
import DashboardPreview from "@/components/landing/DashboardPreview";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import FadeIn from "@/components/landing/FadeIn";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[220px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[180px]" />

        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[160px]" />
      </div>

      <Navbar />

      <Hero />

      <DashboardPreview />

      <FadeIn>
        <Features />
      </FadeIn>

      <FadeIn>
        <HowItWorks />
      </FadeIn>

      <FadeIn>
        <Stats />
      </FadeIn>

      <FadeIn>
        <CTA />
      </FadeIn>

      <Footer />
    </main>
  );
}