import CallToAction from "@/components/common/cta/CallToAction";
import ServiceListing from "./ServiceListing";
import ServiceApproach from "./ServiceApproach";
import ServicesHeading from "./ServicesHeading";

const ServicesPage = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full h-full'>
      <ServicesHeading />
      <ServiceListing />
      <ServiceApproach />
      <CallToAction
        title="Ready to bring your vision to life?"
        description="Let’s build something bold together."
        buttonText="Get Started"
        buttonLink="contact"
      />
    </section>
  )
}

export default ServicesPage