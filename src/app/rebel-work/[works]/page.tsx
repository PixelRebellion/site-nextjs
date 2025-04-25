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
  const { works } = resolvedParams; // Extract the specific work slug

  return (
    <div className='mt-20'>Showcasing work: {works}</div>
  );
};

export default RebelWorksPageShowcase;