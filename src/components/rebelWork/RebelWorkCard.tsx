import { createSlug } from '@/utils/helper';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

interface Work {
    id: string;
    title: string;
    description: string;
    problem: string;
    solution: string;
    outcome: string;
    icon: string[];
}

const RebelWorkCard = (work: Work) => {
  return (
        <div key={work.id} className='flex flex-col items-center md:items-start justify-center space-y-12 md:space-y-16'>
          <div className='md:max-h-[60rem]'>
            <Image src={`/assets/images/${work.icon[0]}.webp`} width={1000} height={1000} alt={`${work.title} image`} className='w-10/11 md:w-full h-fit md:max-w-[50rem] mx-auto md:mx-0 object-cover' />
            <h1 className='text-[2.4rem] text-white text-center md:text-left font-bold mt-12'>{work.title}</h1>
            <p className='text-[1.8rem] text-center md:text-left text-[var(--body-color)] w-11/12 md:w-[400px] mx-auto md:mx-0 mt-2 bottom-10'>{`${work.description.split('.')[0]}.`}</p>
          </div>
          <Link href={`/rebel-work/${createSlug(work.title)}`}><button className='w-[18rem] h-[5.5rem] border text-xl rounded-lg text-[var(--heading-color)] border-white cursor-pointer'>Full case study </button></Link>
        </div>  )
}

export default RebelWorkCard