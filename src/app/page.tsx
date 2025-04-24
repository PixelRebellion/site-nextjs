import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import OurProcesses from "@/components/ourProcesses/OurProcesses";
import WhatWeDo from "@/components/whatWeDo/WhatWeDo";

export default function Home() {
  return (
      <main>
        <Hero />
        <WhatWeDo />
        <OurProcesses />
        <About />
      </main>  );
}
