'use client'

import React from 'react'

const Carrousel = () => {
    const logos = [
        { src: "vuejs", alt: "Vue js" },
        { src: "figma", alt: "Figma" },
        { src: "react", alt: "React" },
        { src: "css3", alt: "CSS" },
        { src: "nextjs", alt: "Next js" },
        { src: "dot-net", alt: ".NET" },
        { src: "mongodb", alt: "Mongo DB" },
        { src: "python", alt: "Python" },
        { src: "html5", alt: "HTML" },
        { src: "express", alt: "Express js" },
        { src: "laravel", alt: "Laravel" },
        { src: "php", alt: "php" },
        { src: "woocommerce", alt: "WooCommerce" },
        { src: "azuresqldatabase", alt: "SQL" },
        { src: "tailwindcss", alt: "Tailwind CSS" },
        { src: "webflow", alt: "Webflow" },
        { src: "javascript", alt: "JavaScript" },
        { src: "canva", alt: "Canva" },
        { src: "framermotion", alt: "Framer" },
        { src: "wordpress", alt: "WordPress" },
        { src: "nuxtjs", alt: "Nuxt js" },
        { src: "typescript", alt: "TypeScript" },
    ]

    return (
        <div className="w-full overflow-hidden bg-gray-50 py-8">
            <div className="flex animate-scroll">
                {/* First set of logos */}
                {logos.map((logo, index) => (
                    <div key={`first-${index}`} className="flex md:mx-20 justify-center flex-shrink-0 px-4">
                        <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo.src}/${logo.src}-original.svg`}
                            alt={logo.alt}
                            title={logo.alt}
                            className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                ))}

                {/* Second set of logos for seamless loop */}
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
                    animation: scroll 20s linear infinite;
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
