import React from 'react'
import CallToAction from '@/components/common/cta/CallToAction';
import RebelWorkHeading from './RebelWorkHeading';
import RebelWorkList from './RebelWorkList';

const RebelWorkPage = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full bg-[var(--background-color)]'>
      <RebelWorkHeading />
      <RebelWorkList />
        <CallToAction
            title="Ready to bring your vision to life?"
            description="Let’s build something bold together."
            buttonText="Get started"
            buttonLink="contact"
          />
    </div>

  )
}

export default RebelWorkPage