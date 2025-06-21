import React from 'react';

interface WhatWeDoCardProps {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const WhatWeDoCard = ({id, title, description, icon}: WhatWeDoCardProps) => {
  return (
    <div key={id} className="bg-gradient-to-b from-blue-600 to-purple-700 p-0.5 rounded-3xl md:w-[50rem] w-11/12 h-[35rem] md:h-[45rem] mx-auto">
      <div className="bg-black p-6 rounded-3xl h-full flex items-center text-center justify-center">
        <div className='flex flex-col gap-2 items-center justify-center h-full'>
            <div className='mb-12'>{icon}</div>
            <h2 className="text-white text-center text-[3.2rem] font-bold my-2">{title}</h2>
            <p className="text-gray-400 text-[1.8rem] w-11/12 md:w-[400px] leading-relaxed">
            {description}
            </p>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDoCard;