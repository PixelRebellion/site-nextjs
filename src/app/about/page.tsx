import CallToAction from '@/components/common/cta/CallToAction'
import AboutCard from './AboutCard'

const AboutPage = () => {
  return (
    <section className='flex flex-col items-center justify-start w-full h-full bg-[var(--background-color)]'>
      <div className='mx-2 md:mx-0 text-center mf:text-left'>
        <h3 className='mt-36 text-[4.8rem] text-[var(--heading-color)]'>Meet the Rebels</h3>
        <p className='text-[2rem] text-[var(--heading-color)] '>Creative minds, strategic thinkers, bold builders.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-center md:text-left md:max-w-8/12 px-4 items-center mt-12 md:mt-36">
        <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-md space-y-12">
          <h4 className="text-[1.8rem] md:text-[2.4rem] font-semibold text-[var(--primary-color)]">Creativity over conformity</h4>
          <h4 className="text-[1.8rem] md:text-[2.4rem] font-semibold text-[var(--primary-color)]">Quality over quantity</h4>
          <h4 className="text-[1.8rem] md:text-[2.4rem] font-semibold text-[var(--primary-color)]">Design with intent</h4>
          <h4 className="text-[1.8rem] md:text-[2.4rem] font-semibold text-[var(--primary-color)]">Build with purpose</h4>
        </div>
      <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-md">
        <h4 className="text-[2.4rem] text-[var(--heading-color)]">About Us</h4>
        <div className='text-[1.8rem] text-bold text-[var(--heading-color)] space-y-8'>
          <p className='font-bold'>Two rebels, One mission, Infinite creativity.</p>
          <p>Pixel Rebellion is a creative agency founded by Adam Hamwandi and Daniel Malmgren de Oliveira - two creative entrepreneurs , software engineers, and designers with one clear goal: To build bold digital experiences that break boundaries and elevate brands.</p>
          <p>With background in UI/UX design, brand strategy, full-stack development, and AI driven SEO, we blend creativity with code to craft smart, beautiful, and high-performing digital products.</p>
          <p>We don’t just follow trends - we set them.
          <span className='block'>From no-code to custom-coded web apps, from sleek brand identities to conversion-driven websites - we turn vision into reality with precision, strategy, and style.</span></p>
          <p>
            <span className='block'>We’re not just a team.</span>
            <span className='block'>We’re a rebellion against the ordinary.</span>
            <span className='block'>Welcome to the future of creative digital.</span>
          </p>
        </div>
      </div>
      <AboutCard />

    </div>
    <CallToAction
      title="Got a project in mind?"
      description="Let’s bring it to life — with strategy, design, and code that rebels against the ordinary."
      buttonText="Get Started"
      buttonLink="contact"
    />

  </section>
  )
}

export default AboutPage