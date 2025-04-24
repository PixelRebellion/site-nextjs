import React from 'react'
import WebDevelopment from '../../../public/assets/icons/WebDevelopment'
import Brand from '../../../public/assets/icons/Brand'
import Seo from '../../../public/assets/icons/Seo'
import UxUi from '../../../public/assets/icons/UxUi'
import WhatWeDoCard from './WhatWeDoCard'

const services = [
    {id: 1, title: "UI/UX Design", description: "Intuitive, modern, and user-first interfaces — designed to engage and convert.", icon: <UxUi />},
    {id: 2, title: "Web Development", description: "Robust, scalable, and high-performance web applications — built to last.", icon: <WebDevelopment />},
    {id: 3, title: "Branding", description: "Distinctive, memorable, and impactful branding — designed to resonate.", icon: <Brand />},
    {id: 4, title: "SEO", description: "Data-driven, results-oriented SEO strategies — designed to rank.", icon: <Seo />},

]

const WhatWeDoList = () => {
  return (
    <div className='grid grid-cols-1 w-full md:w-auto md:grid-cols-2 gap-8 md:gap-32 items-center justify-center my-8'>
        {services.map((service) => (
            <WhatWeDoCard
                key={service.id}
                serviceTitle={service.title}
                serviceDescription={service.description}
                serviceIcon={service.icon}
            />
        ))}
    </div>
  )
}

export default WhatWeDoList