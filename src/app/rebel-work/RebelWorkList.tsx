import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { works } from '../../utils/dataLists';
import { createSlug } from '../../utils/helper';
import RebelWorkCard from '@/components/rebelWork/RebelWorkCard';

const RebelWorkList = () => {
  return (
    <div className='grid grid-cols-1 mx-auto w-full md:w-auto xl:grid-cols-2 gap-32 items-start justify-center my-8'>
      {works.map((work) => (
        <RebelWorkCard key={work.id} {...work} />
      ))}
    </div>
  )
}

export default RebelWorkList