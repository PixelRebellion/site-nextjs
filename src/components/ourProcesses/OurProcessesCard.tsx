
interface Process {
  processTitle: string;
  procesessDescription: string;
  processIcon: React.ReactNode;
}

const OurProcessesCard = ({processTitle, procesessDescription, processIcon}: Process) => {

  return (
    <div className='flex flex-col gap-2 items-center md:items-start justify-center h-full'>
    <div className='mb-4'>{processIcon}</div>
    <h2 className="text-white text-center text-[2.4rem] md:text-[3.2rem] font-bold my-2">{processTitle}</h2>
    <p className="text-[var(--body-color)] text-center md:text-left text-[1.8rem] w-11/12 md:w-[400px] leading-[150%]">
    {procesessDescription}
    </p>
    </div>
  )
}

export default OurProcessesCard