import { footerList } from '@/data/dataLists'
import Link from 'next/link'

const FooterList = () => {
  return (
    <>
        <div className='flex flex-col md:flex-row items-center justify-between'>
            {footerList.map((item) => (
                <div key={item.id} className='flex flex-col items-center justify-between'>
                    <div className='flex items-center justify-center'>
                        <p className='text-[1.8rem] text-center text-[var(--body-color)] w-[150px] mt-2'><Link href={item.link}>{item.title}</Link></p>
                        <p className='invisible md:visible text-white text-2xl font-bold'>{item.title !== 'Contact' && '\\'}</p>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default FooterList