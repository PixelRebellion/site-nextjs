import CallToAction from "@/components/common/cta/CallToAction";
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
        <CallToAction
          title="Let’s Build Something Bold Together"
          description="Whether you have a big idea or need help shaping one — we’re ready to turn your vision into reality. Let’s talk."
          buttonText="Let's Talk"
          buttonLink="contact"
        />
      </section>  );
}
