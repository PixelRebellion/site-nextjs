import React from 'react'

const copyRightDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
}

const FooterCopyright = () => {
  return (
    <div className='absolute bottom-10 text-2xl text-center text-[var(--body-color)]'>© {copyRightDate()} <span className='text-[var(--primary-color)]'>Pixel Rebellion.</span> All rights reserved.</div>
  )
}

export default FooterCopyright