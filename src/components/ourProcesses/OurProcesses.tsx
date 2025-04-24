import React from 'react'
import OurProcessesIntro from './OurProcessesIntro'
import OurProcessesCard from './OurProcessesCard'
import OurProcessesButton from './OurProcessesButton'

const OurProcesses = () => {
  return (
    <section className='flex flex-col mx-auto w-full items-center justify-start h-full bg-[url(/assets/our-processes.svg)]'>
        <OurProcessesIntro />
        <OurProcessesCard />
        <OurProcessesButton />

    </section>
  )
}

export default OurProcesses