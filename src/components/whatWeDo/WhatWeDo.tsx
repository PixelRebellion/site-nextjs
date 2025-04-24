import WhatWeDoIntro from '@/components/whatWeDo/WhatWeDoIntro'
import WhatWeDoList from './WhatWeDoList'
import WhatWeDoButton from './WhatWeDoButton'

const WhatWeDo = () => {
  return (
    <section className='flex flex-col mx-auto w-full items-center justify-start h-full bg-black bg-[url(/assets/what-we-do-background.svg)]'>
      <WhatWeDoIntro />
      <WhatWeDoList />
      <WhatWeDoButton />
    </section>
)}

export default WhatWeDo