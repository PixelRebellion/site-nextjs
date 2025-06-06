// import Hero from "@/components/hero/Hero";
// import WhatWeDo from "@/components/whatWeDo/WhatWeDo";
// import OurProcesses from "@/components/ourProcesses/OurProcesses";
// import RebelWork from "@/components/rebelWork/RebelWork";
// import CallToAction from "@/components/common/cta/CallToAction";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/hero/Hero"), {

});

const WhatWeDo = dynamic(() => import("@/components/whatWeDo/WhatWeDo"), {
});

const OurProcesses = dynamic(() => import("@/components/ourProcesses/OurProcesses"), {
});

const RebelWork = dynamic(() => import("@/components/rebelWork/RebelWork"), {
});

const CallToAction = dynamic(() => import("@/components/common/cta/CallToAction"), {

});

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
