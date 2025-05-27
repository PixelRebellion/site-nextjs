import Image from 'next/image';
import { works } from '@/utils/dataLists';
import { createSlug } from '@/utils/helper';
import CallToAction from '@/components/common/cta/CallToAction';

const getWorksData = async () => {
  return works;
};

export async function generateStaticParams() {
  const works = await getWorksData();

  return works.map((work) => ({
    slug: createSlug(work.title),
  }));
}

interface PageParams {
  slug: string;
}

const RebelWorksPageShowcase = async ({ params }: { params: Promise<PageParams> }) => {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  console.log({slug});

  const workItem = works.find((workItem) => createSlug(workItem.title) === slug);

  return (
    <div className='flex flex-col items-center justify-center space-y-12 w-full h-full bg-[var(--background-color)]'>
      <Image src={`/assets/images/${workItem!.icon}.webp`} width={1000} height={1000} alt={`${workItem!.title} image`} className='mt-48 w-10/12 rounded-xl mx-auto md:mx-0'/>
      <h3 className='w-10/12 text-center md:text-left text-[3.2rem] text-[var(--heading-color)]'>{workItem!.title}</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 w-10/12 mx-auto'>
        <div className='w-full md:w-10/12'>
          <p className='text-[2rem] text-[var(--body-color)] font-bold'>Description</p>
          <p className='text-[1.8rem] text-[var(--body-color)]'>{workItem!.description}</p>
        </div>
        <div className='w-full md:w-10/12'>
          <p className='text-[2rem] text-[var(--body-color)] font-bold'>Problem statement</p>
          <p className='text-[1.8rem] text-[var(--body-color)]'>{workItem!.problem}</p>
        </div>
        <div className='w-full md:w-10/12'>
          <p className='text-[2rem] text-[var(--body-color)] font-bold'>Solution</p>
          <p className='text-[1.8rem] text-[var(--body-color)]'>{workItem!.solution}</p>
        </div>
        <div className='w-full md:w-10/12 mb-36'>
          <p className='text-[2rem] text-[var(--body-color)] font-bold'>Outcome</p>
          <p className='text-[1.8rem] text-[var(--body-color)]'>{workItem!.outcome}</p>
        </div>
      </div>
      <CallToAction
        title="Got a project in mind?"
        description="Let’s bring it to life — with strategy, design, and code that rebels against the ordinary.."
        buttonText="Get started"
        buttonLink="contact"
      />
    </div>
  );
};

export default RebelWorksPageShowcase;