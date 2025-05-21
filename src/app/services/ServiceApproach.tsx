import React from 'react'
import NumberOne from '../../../public/assets/icons/NumberOne'
import NumberTwo from '../../../public/assets/icons/NumberTwo';
import NumberThree from '../../../public/assets/icons/NumberThree';
import NumberFour from '../../../public/assets/icons/NumberFour';

const approachInfo = [
  {
    id: 1,
    title: 'Discovery & Strategy',
    description: 'We begin by understanding your goals, challenges, and audience. Together, we define the roadmap and set the direction with intention.',
    icon: <NumberOne />,
  },
  {
    id: 2,
    title: 'Design & Concept',
    description: 'We turn insights into creative concepts and intuitive interfaces — building a strong visual identity that aligns with your brand and purpose.',
    icon: <NumberTwo />,
  },
  {
    id: 3,
    title: 'Build & Refine',
    description: 'Our developers bring the design to life using the most suitable technologies — whether it’s custom code or no-code. We test, iterate, and optimize for performance and scalability.',
    icon: <NumberThree />,
  },
  {
    id: 4,
    title: 'Launch & Evolve',
    description: 'We launch your product with confidence — and support you beyond the launch with ongoing improvements, SEO, and brand growth.',
    icon: <NumberFour />,
  },
];

const ServiceApproach = () => {
  return (
    <div className='bg-cover bg-center bg-no-repeat bg-fixed bg-[url(/assets/backgrounds/rebel-work.svg)]'>
      <h3 className='mt-36 text-[4.8rem] text-center mx-auto text-[var(--heading-color)]'>How We Work</h3>
      <p className='text-[2rem] w-11/12 md:max-w-5xl text-center mx-auto text-[var(--heading-color)]'>Every project is a journey — and we guide you through each step with clarity, collaboration, and creative precision.</p>
      <div className='mt-36 mb-72'>
      {approachInfo.map((approach) => (
        <div key={approach.id} className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-36 my-20 mx-auto w-11/12 md:max-w-3/5'>
          <div>
            {approach.icon}
          </div>
          <div>
            <h4 className='text-[2.4rem] text-center md:text-left text-[var(--heading-color)]'>{approach.title}</h4>
            <p className='text-[2rem] mt-4 md:mt-0 mx-auto md:mx-0 w-11/12 md:w-4/5 text-center md:text-left text-[var(--heading-color)]'>{approach.description}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default ServiceApproach