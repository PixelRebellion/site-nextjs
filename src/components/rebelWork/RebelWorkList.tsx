import { works } from '../../utils/dataLists';
import RebelWorkCard from './RebelWorkCard';

const RebelWorkList = () => {
  const splicedWorks = [...works].splice(0, 4);
  return (
    <div className='grid grid-cols-1 mx-auto w-full md:w-auto xl:grid-cols-2 gap-32 items-start justify-center my-8'>
      {splicedWorks.map((work) => (
        <RebelWorkCard key={work.id} {...work} />
      ))}
    </div>
  )
}

export default RebelWorkList