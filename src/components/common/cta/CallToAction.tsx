import Link from "next/link";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string | undefined;
}

const CallToAction = ({title, description, buttonText, buttonLink}: CallToActionProps) => {
  return (
    <section className='flex flex-col w-full items-center justify-center h-[500px] bg-cover bg-center bg-no-repeat bg-fixed bg-[url(/assets/backgrounds/cta.svg)]'>
          <div className='mt-18 mb-28 mx-auto w-11/12'>
            <h1 className='md:w-full text-[3.6rem] md:text-[4.8rem] font-bold text-center text-[var(--primary-color)]'>{title}</h1>
            <p className='text-[1.8rem] text-center text-[var(--body-color)] md:max-w-[600px] mx-auto mt-12 md:mt-0'>{description}</p>
          </div>
          <Link href={`/${buttonLink}` || '#'} className='flex items-center justify-center'>
            <button className='h-[55px] w-[220px] p-2 border border-[var(--primary-color)] bg-[var(--primary-color)] text-2xl font-semibold text-[var(--background-color)] cursor-pointer rounded-lg hover:bg-transparent hover:text-[var(--primary-color)] transition-colors duration-300 ease-in-out'>{buttonText}</button>
          </Link>

    </section>
  )
}

export default CallToAction