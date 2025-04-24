import React from 'react'
import CallToActionIntro from './CallToActionIntro'

const CallToAction = () => {
  return (
    <section className='flex flex-col w-full items-center justify-center h-[500px] bg-cover bg-center bg-no-repeat bg-fixed bg-[url(/assets/backgrounds/cta.svg)]'>
        <CallToActionIntro />
    </section>
  )
}

export default CallToAction