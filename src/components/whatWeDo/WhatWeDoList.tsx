import { services } from '../../utils/dataLists'
import WhatWeDoCard from './WhatWeDoCard'

const WhatWeDoList = () => {
  return (
    <div className='grid grid-cols-1 w-full md:w-auto md:grid-cols-2 gap-8 md:gap-32 items-center justify-center my-8'>
        {services.map((service) => (
            <WhatWeDoCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
            />
        ))}
    </div>
  )
}

export default WhatWeDoList