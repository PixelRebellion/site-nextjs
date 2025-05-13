import HeroButton from '../common/hero/HeroButton'
import HeroIntroText from '../common/hero/HeroIntroText'
import WhatWeDoList from './WhatWeDoList'

const WhatWeDo = () => {
  return (
    <section className='flex flex-col mx-auto w-full items-center justify-start h-full bg-cover bg-center bg-no-repeat bg-fixed bg-[url(/assets/backgrounds/what-we-do-background.svg)]'>
      <HeroIntroText
        title="What We Do"
        description="At Pixel Rebellion, we merge design, development, and strategy to craft bold digital experiences. Whether you're launching a new brand or scaling your digital presence — we've got you covered."
      />
      <WhatWeDoList />
      <HeroButton
        text='Lets Talk'
        link='/contact'
      />
    </section>
)}

export default WhatWeDo