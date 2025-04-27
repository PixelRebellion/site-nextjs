import CallToAction from "@/components/callToAction/CallToAction";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import OurProcesses from "@/components/ourProcesses/OurProcesses";
import RebelWork from "@/components/rebelWork/RebelWork";
import WhatWeDo from "@/components/whatWeDo/WhatWeDo";

export default function Home() {
  return (
      <section>
        <Hero />
        <WhatWeDo />
        <OurProcesses />
        <RebelWork />
        <CallToAction />
        <Footer />
      </section>  );
}
