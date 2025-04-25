import HeroButton from '../common/HeroButton'
import HeroIntroText from '../common/HeroIntroText'
import OurProcessesList from './OurProcessesList'

const OurProcesses = () => {
  return (
    <section className='flex flex-col mx-auto w-full items-center justify-start h-full bg-cover bg-center bg-no-repeat bg-fixed bg-[url(/assets/backgrounds/our-processes.svg)]'>
        <HeroIntroText
          title="Our Processes"
          description="We follow a clear and efficient process to bring your ideas to life. Here's how we work, from start to finish:"
        />
        <OurProcessesList />
        <HeroButton
          text='Get Started With Us'
        />

    </section>
  )
}

export default OurProcesses