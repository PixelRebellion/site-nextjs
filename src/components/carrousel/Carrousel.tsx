'use client'

import React from 'react'

const Carrousel = () => {
    const logos = [
        { src: "vuejs", alt: "vuejs" },
        { src: "figma", alt: "figma" },
        { src: "react", alt: "react" },
        { src: "nextjs", alt: "nextjs" },
        { src: "dotnetcore", alt: "dotnetcore" },
        { src: "mongodb", alt: "mongodb" },
        { src: "laravel", alt: "laravel" },
        { src: "php", alt: "php" },
        { src: "azuresqldatabase", alt: "azuresqldatabase" },
        { src: "webflow", alt: "webflow" },
        { src: "framermotion", alt: "framermotion" },
        { src: "wordpress", alt: "wordpress" },
    ]

    return (
        <div className="w-full overflow-hidden bg-gray-50 py-8">
            <div className="flex animate-scroll">
                {/* First set of logos */}
                {logos.map((logo, index) => (
                    <div key={`first-${index}`} className="flex md:mx-20 justify-center flex-shrink-0 px-4">
                        <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo.src}/${logo.src}-original.svg`}
                            className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                ))}

                {/* Second set of logos for seamless loop */}
                {logos.map((logo, index) => (
                   <div key={`second-${index}`} className="flex md:mx-20 justify-center flex-shrink-0 px-4">
                        <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${logo.src}/${logo.src}-original.svg`}
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
