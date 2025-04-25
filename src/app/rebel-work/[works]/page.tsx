import { createSlug } from '@/utils/helper';
import React from 'react';

const getWorksData = async () => {
  return [
    { slug: 'work-1' },
    { slug: 'work-2' },
    { slug: 'work-3' },
    { slug: 'work-4' },
  ];
};

export async function generateStaticParams() {
  const works = await getWorksData();

  return works.map((work) => ({
    works: createSlug(work.slug),
  }));
}

interface PageParams {
  works: string;
}


const RebelWorksPageShowcase = async ({ params }: { params: Promise<PageParams> }) => {
  const resolvedParams = await params;
  const { works } = resolvedParams;

  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-[var(--background-color)]'>
      <h1 className='text-[8rem] text-[var(--heading-color)]'>{works}</h1>

    </div>
  );
};

export default RebelWorksPageShowcase;