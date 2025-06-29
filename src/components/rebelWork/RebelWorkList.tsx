import Image from 'next/image';
import Link from 'next/link';
import { works } from '../../utils/dataLists';
import { createSlug } from '../../utils/helper';

const RebelWorkList = () => {
  const splicedWorks = [...works].splice(0, 4);
  return (
    <div className='grid grid-cols-1 mx-auto w-full md:w-auto xl:grid-cols-2 gap-32 items-start justify-center my-8'>
      {splicedWorks.map((work) => (
        <div key={work.id} className='flex flex-col items-center md:items-start justify-center space-y-12 md:space-y-16'>
          <div>
            <Image src={`/assets/images/${work.icon[0]}.webp`} width={1000} height={1000} alt={`${work.title} image`} className='w-[90%] h-[60%] md:max-w-[50rem] mx-auto md:mx-0 object-fill' />
            <h1 className='text-[2.4rem] text-white text-center md:text-left font-bold mt-4'>{work.title}</h1>
            <p className='text-[1.8rem] text-center md:text-left text-[var(--body-color)] w-11/12 md:w-[400px] mx-auto md:mx-0 mt-2'>{`${work.description.split('.')[0]}.`}</p>
          </div>
          <Link href={`/rebel-work/${createSlug(work.title)}`}><button className='w-[18rem] h-[5.5rem] border text-xl rounded-lg text-[var(--heading-color)] border-white cursor-pointer'>Full case study </button></Link>
        </div>
      ))}
    </div>
  )
}

export default RebelWorkList