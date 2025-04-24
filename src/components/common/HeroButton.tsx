import React from 'react'

const HeroButton = ({text}: {text:string}) => {
  return (
      <div className='my-36'>
          <button className='h-[55px] w-[220px] p-2 border border-[var(--primary-color)] text-2xl font-semibold text-[var(--primary-color)] cursor-pointer rounded-lg hover:bg-[var(--primary-color)] hover:text-[var(--heading-color)] transition-colors duration-300 ease-in-out'>{text}</button>
      </div>
    )
}

export default HeroButton