import Link from 'next/link'
import Image from 'next/image'
import LinkedIn from '../../../public/assets/icons/LinkedIn'
import Email from '../../../public/assets/icons/Email'

interface ProfileType {
    id: number;
    name: string;
    role: string;
    image: string;
    linkedIn: string;
    email: string;
}

const profileInfo: ProfileType[] = [
    {
        id: 1,
        name: 'Adam Hamwandi',
        role: 'Creative Director, Designer & Developer',
        image: '/assets/images/adam.webp',
        linkedIn: 'https://www.linkedin.com/in/adam-hamwandi',
        email: 'adam@pixelrebellion.dev'
    },
    {
        id: 2,
        name: 'Daniel Malmgren de Oliveira',
        role: 'Full-Stack Engineer & Product Architect',
        image: '/assets/images/daniel.webp',
        linkedIn: 'https://www.linkedin.com/in/daniel-malmgren-de-oliveira',
        email: 'daniel@pixelrebellion.dev'
    },
  ];

const AboutCard = () => {
  return (
    <>
      {profileInfo.map((profile: ProfileType) => (
        <div key={profile.id} className="mx-24 md:mt-36">
            <div className="flex flex-col items-center mb-8 shrink-0">
                <Image
                    src={profile.image}
                    alt={profile.name}
                    height={200}
                    width={200}
                    className='size-[20rem] object-cover p-2 bg-gradient-to-b from-blue-600 to-purple-700 rounded-full'
                />
                <h4 className="mt-4 text-[1.8rem] font-semibold text-[var(--heading-color)]">{profile.name}</h4>
                <p className="text-[1.4rem] text-[var(--heading-color)]">{profile.role}</p>
                <div className='flex gap-12 items-center my-12'>
                    <Link href={profile.linkedIn} target="_blank" rel="noopener noreferrer" className='blank'><LinkedIn /></Link>
                    <Link href={`mailto:${profile.email}`} className='blank'><Email /></Link>
                </div>
            </div>
        </div>
      ))}
    </>
  )
}

export default AboutCard