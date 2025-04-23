import WhatWeDoIntro from '@/components/whatWeDo/WhatWeDoIntro'
import WhatWeDoList from './WhatWeDoList'

const WhatWeDo = () => {
  return (
    <section className='flex flex-col mx-auto w-full items-center justify-start h-full bg-black bg-[url(/assets/what-we-do-background.svg)]'>
      <WhatWeDoIntro />
      <WhatWeDoList />
    </section>
)}

export default WhatWeDo