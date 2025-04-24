import React from 'react'
import CallToActionButton from './CallToActionButton'

const CallToActionIntro = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center gap-4 md:gap-0'>
        <h1 className='text-[3.6rem] md:text-[4.8rem] font-bold text-center text-[var(--primary-color)]'>Let’s Build Something Bold Together</h1>
        <p className='text-[1.8rem] text-center text-[var(--body-color)] w-11/12 md:max-w-[600px]'>Whether you have a big idea or need help shaping one — we’re ready to turn your vision into reality. Let’s talk.</p>
        <CallToActionButton />
    </div>
  )
}

export default CallToActionIntro