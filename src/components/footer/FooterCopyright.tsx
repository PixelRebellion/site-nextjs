const FooterCopyright = () => {
  return (
    <div className='absolute bottom-10 text-2xl text-center text-[var(--body-color)]'>© {new Date().getFullYear()} <span className='text-[var(--primary-color)]'>Pixel Rebellion.</span> All rights reserved.</div>
  )
}

export default FooterCopyright