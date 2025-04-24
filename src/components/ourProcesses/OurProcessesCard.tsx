import React from 'react'
import Discover from '../../../public/assets/icons/Discover';
import Design from '../../../public/assets/icons/Design';
import Development from '../../../public/assets/icons/Development';
import Launch from '../../../public/assets/icons/Launch';

const processes = [
    {id: 1, title: "Discovery & Strategy", description: "We dive deep into your goals,  audience, and vision to create a custom strategy that sets the foundation for success.", icon: <Discover />},
    {id: 2, title: "Design & Prototyping", description: "Our design team crafts stunning, user-centered designs, testing them through prototypes to ensure a seamless experience.", icon: <Design />},
    {id: 3, title: "Development & Testing", description: "We bring the designs to life with high-quality code, followed by rigorous testing to ensure everything works perfectly.", icon: <Development />},
    {id: 4, title: "Launch & Support", description: "We After launch, we optimize, monitor, and provide ongoing support to ensure your digital experience continues to evolve and perform.", icon: <Launch />},
];

const OurProcessesCard = () => {

  return (
    <div className='grid grid-cols-1 w-full md:w-auto md:grid-cols-2 gap-8 md:gap-48 items-center justify-center my-8'>
        {processes.map((process) => (
            <div className='flex flex-col gap-2 items-start justify-center h-full'>
                <div className='mb-4'>{process.icon}</div>
                <h2 className="text-white text-center text-[3.2rem] font-bold my-2">{process.title}</h2>
                <p className="text-gray-400 text-[1.8rem] w-[400px] leading-[150%]">
                {process.description}
                </p>
            </div>
        ))}
    </div>
  )
}

export default OurProcessesCard