'use client'

import React from 'react'
import Image from 'next/image'

const Carrousel = () => {
    const logos = [
        { src: "html5", alt: "HTML" },
        { src: "css3", alt: "CSS" },
        { src: "javascript", alt: "JavaScript" },
        { src: "typescript", alt: "TypeScript" },
        { src: "react", alt: "React" },
        { src: "nextjs", alt: "Next js" },
        { src: "wordpress", alt: "WordPress" },
        { src: "woocommerce", alt: "WooCommerce" },
        { src: "figma", alt: "Figma" },
        { src: "canva", alt: "Canva" },
        { src: "framermotion", alt: "Framer" },
        { src: "laravel", alt: "Laravel" },
        { src: "vuejs", alt: "Vue js" },
        { src: "nuxtjs", alt: "Nuxt js" },
        { src: "dot-net", alt: ".NET" },
        { src: "azuresqldatabase", alt: "SQL" },
        { src: "mongodb", alt: "Mongo DB" },
        { src: "python", alt: "Python" },
        { src: "express", alt: "Express js" },
        { src: "php", alt: "php" },
        { src: "tailwindcss", alt: "Tailwind CSS" },
        { src: "webflow", alt: "Webflow" },
    ]

    return (
        <div className="w-full overflow-hidden bg-gray-50 py-8">
            <div className="flex animate-scroll">
                {logos.map((logo, index) => (
                    <div key={`first-${index}`} className="flex md:mx-20 justify-center flex-shrink-0 px-4">
                        <Image
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo.src}/${logo.src}-original.svg`}
                            alt={logo.alt}
                            title={logo.alt}
                            height={100}
                            width={100}
                            className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                ))}
                {logos.map((logo, index) => (
                   <div key={`second-${index}`} className="flex md:mx-20 justify-center flex-shrink-0 px-4">
                        <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo.src}/${logo.src}-original.svg`}
                            alt={logo.alt}
                            title={logo.alt}
                            className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 30s linear infinite;
                    width: max-content;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    )
}

export default Carrousel
