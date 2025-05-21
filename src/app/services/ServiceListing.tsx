const serviceListing = [
    {
      id: 1,
      title: 'UI/UX Design',
      description: 'We craft elegant, functional interfaces tailored to user needs and business goals. From wireframes to polished visuals — we focus on creating smooth, intuitive journeys across every screen and device.',
      image: 'uxuidesign',
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'We build fast, scalable websites using both custom code and no/low-code platforms. Whether it’s React, Next.js, WordPress, Webflow, or Framer — we pick the best tools to match your vision and build with performance, flexibility, and future-growth in mind.',
      image: 'webdevelopment',
    },
    {
      id: 3,
      title: 'Brand Identity',
      description: 'We design bold, strategic brand systems that tell your story with clarity and impact — from logos and color systems to complete brand guidelines that bring consistency across every platform.',
      image: 'brandidentity',
    },
    {
      id: 4,
      title: 'Mobile App Design & Development',
      description: "We design intuitive, engaging mobile app experiences that feel natural on both iOS and Android. Whether it's a standalone product or an extension of your web platform, we focus on usability, consistency, and performance — all wrapped in a beautiful interface.",
      image: 'appdevelopment',
    },
    {
      id: 5,
      title: 'SEO',
      description: "We use AI-powered SEO strategies tailored for the new era of search. Through intelligent content creation, on-page precision, and real-time optimization — we help your brand dominate visibility, drive organic traffic, and stay ahead of trends.",
      image: 'seo',
    },
];

const ServiceListing = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-fixed bg-[url(/assets/backgrounds/rebel-work.svg)]">
        {serviceListing.map((service) => (
            <div key={service.id} className='flex flex-col md:flex-row items-center justify-between gap-2 md:gap-48 px-96 w-screen mt-48 md:my-24'>
            <img src={`/assets/images/services/${service.image}.svg`} alt={service.title} className='max-w-[36rem] block md:hidden h-auto' />
            {service.id % 2 !== 0 && (<img src={`/assets/images/services/${service.image}.svg`} alt={service.title} className='hidden md:block max-w-[36rem] h-auto' />)}
            <div className="w-screen text-center md:w-1/2 md:text-left my-12">
                <h3 className='text-[4.8rem] text-[var(--heading-color)]'>{service.title}</h3>
                <p className='text-[1.5rem] md:text-[2rem] mx-4 md:mx-0 text-[var(--body-color)]'>{service.description}</p>
            </div>
            {service.id % 2 === 0 && (<img src={`/assets/images/services/${service.image}.svg`} alt={service.title} className='hidden md:block max-w-[36rem] h-auto' />)}
        </div>
        ))}
    </div>
  )
}

export default ServiceListing