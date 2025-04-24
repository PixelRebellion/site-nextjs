import React from 'react'
import FooterIntro from './FooterIntro'
import FooterList from './FooterList'
import FooterCopyright from './FooterCopyright'

const Footer = () => {
  return (
    <section className='relative flex flex-col mx-auto w-full items-center justify-start h-[650px] bg-cover bg-center bg-no-repeat bg-fixed bg-[url(/assets/backgrounds/footer.svg)]'>
        <FooterIntro />
        <FooterList />
        <FooterCopyright />
    </section>
  )
}

export default Footer