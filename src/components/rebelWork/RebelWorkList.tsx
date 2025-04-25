import Image from 'next/image';
import { works } from '../../data/dataLists';

const RebelWorkList = () => {
  return (
    <div className='grid grid-cols-1 mx-auto w-full md:w-auto md:grid-cols-2 gap-12 md:gap-32 items-center justify-center my-8'>
        {works.map((work) => (
            <div key={work.id} className='flex flex-col items-center md:items-start justify-center'>
                <Image src={`/assets/images/${work.icon}.png`} width={1000} height={1000} alt={`${work.title} image`} className='w-11/12 md:max-w-[50rem]'/>
                <h3 className='text-[2.4rem] text-white font-bold mt-4'>{work.title}</h3>
                <p className='text-[1.8rem] text-center text-[var(--body-color)] w-[400px] mt-2'>{work.description}</p>
            </div>

        ))}
    </div>
  )
}

export default RebelWorkList