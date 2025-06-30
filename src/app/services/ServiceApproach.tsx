import React from 'react'
import { approachInfo } from '@/utils/dataLists'

const ServiceApproach = () => {
  return (
    <div className='bg-cover w-screen bg-center bg-no-repeat bg-fixed bg-[url(/assets/backgrounds/rebel-work.svg)]'>
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