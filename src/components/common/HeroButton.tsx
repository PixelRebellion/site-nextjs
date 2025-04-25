import React from 'react'
import Link from 'next/link'
interface HeroButtonProps {
  text: string;
  link: string;
}

const HeroButton = ({text, link}: HeroButtonProps) => {
  return (
      <div className='my-36'>
        <Link href={link} >
            <button
              type='button'
              aria-label='hero button'
              className='h-[55px] w-[220px] p-2 border border-[var(--primary-color)] text-2xl font-semibold text-[var(--primary-color)] cursor-pointer rounded-lg hover:bg-[var(--primary-color)] hover:text-[var(--heading-color)] transition-colors duration-300 ease-in-out'
              >{text}
            </button>
        </Link>
      </div>
    )
}

export default HeroButton