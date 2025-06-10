import dynamic from "next/dynamic";
import Head from "next/head";

const Hero = dynamic(() => import("@/components/hero/Hero"));
const WhatWeDo = dynamic(() => import("@/components/whatWeDo/WhatWeDo"));
const OurProcesses = dynamic(() => import("@/components/ourProcesses/OurProcesses"));
const RebelWork = dynamic(() => import("@/components/rebelWork/RebelWork"));
const CallToAction = dynamic(() => import("@/components/common/cta/CallToAction"));
const Carrousel = dynamic(() => import("@/components/carrousel/Carrousel"));

export default function Home() {
  return (
    <section>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <Hero />
      <Carrousel />
      <WhatWeDo />
      <OurProcesses />
      <RebelWork />
      <CallToAction
        title="Let´s Build Something Bold Together"
        description="Whether you have a big idea or need help shaping one — we’re ready to turn your vision into reality. Let’s talk."
        buttonText="Let's Talk"
        buttonLink="contact"
      />
    </section>  );
}
