import React from 'react'

const ServicesHeading = () => {
  return (
    <div className="bg-cover bg-center w-full bg-no-repeat bg-fixed bg-[url(/assets/backgrounds/services.svg)]">
        <div className='mt-48 mb-24 md:mt-36 md:mb-36'>
            <h1 className='text-[4.8rem] text-center mx-auto text-[var(--heading-color)]'>What We Do</h1>
            <p className='text-[2rem] w-11/12 md:max-w-5xl text-center mx-auto text-[var(--heading-color)]'>We combine design, strategy, and smart development to build meaningful digital experiences that drive real results.</p>
        </div>
    </div>
  )
}

export default ServicesHeading