import React from 'react'

interface IntroTextProps {
    title: string;
    description: string;
}

const HeroIntroText = ({title, description}: IntroTextProps) => {
  return (
    <div className="h-full w-full space-y-4 my-36">
    <h1 className="text-[4.5rem] md:text-[6.4rem] text-center text-white font-bold leading-tight">{title}</h1>
    <p className="mx-auto w-11/12 md:max-w-[60rem] text-center text-[var(--body-color)] text-3xl leading-[150%]">{description}</p>
  </div>
  )
}

export default HeroIntroText