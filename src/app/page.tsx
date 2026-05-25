import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import Templates from "@/components/sections/Templates";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Stats />
      <Templates />
      <Pricing />
    </main>
  );
}
