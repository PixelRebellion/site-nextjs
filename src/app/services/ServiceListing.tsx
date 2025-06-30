import Image from "next/image";
import { serviceListing } from "../../utils/dataLists";

const ServiceListing = () => {
  return (
    <div className="bg-cover bg-center w-screen bg-no-repeat bg-fixed bg-[url(/assets/backgrounds/rebel-work.svg)]">
        {serviceListing.map((service) => (
            <div key={service.id} className='flex flex-col md:flex-row items-center justify-between gap-2 md:gap-48 md:px-96 w-full mt-48 md:my-24'>
            <Image src={`/assets/images/services/${service.image}.svg`} alt={service.title} height={1000} width={1000} className='max-w-[36rem] block md:hidden h-auto' />
            {service.count % 2 !== 0 && (<img src={`/assets/images/services/${service.image}.svg`} alt={service.title} className='hidden md:block max-w-[36rem] h-auto' />)}
            <div className="w-screen text-center md:w-1/2 md:text-left my-12">
                <h3 className='text-[4.8rem] text-[var(--heading-color)]'>{service.title}</h3>
                <p className='text-[1.5rem] md:text-[2rem] mx-4 md:mx-0 text-[var(--body-color)]'>{service.description}</p>
            </div>
            {service.count % 2 === 0 && (<img src={`/assets/images/services/${service.image}.svg`} alt={service.title} className='hidden md:block max-w-[36rem] h-auto' />)}
        </div>
        ))}
    </div>
  )
}

export default ServiceListing