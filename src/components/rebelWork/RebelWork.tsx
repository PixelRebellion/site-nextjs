import HeroButton from '../common/hero/HeroButton'
import HeroIntroText from '../common/hero/HeroIntroText'
import RebelWorkList from './RebelWorkList'

const RebelWork = () => {
  return (
    <section className='flex flex-col mx-auto w-full items-center justify-start h-full bg-cover bg-center bg-no-repeat bg-fixed bg-[url(/assets/backgrounds/rebel-work.svg)]'>
        <HeroIntroText
            title="Rebel Work"
            description="A glimpse into the kind of digital experiences we craft — bold, modern, and made to stand out."
        />
        <RebelWorkList />
        <div className='mt-8 md:mt-36'>
          <HeroButton
            text='See more...'
            link='/rebel-work'

            />
        </div>
    </section>
  )
}

export default RebelWork