import React from 'react';

interface WhatWeDoCardProps {
    serviceTitle: string;
    serviceDescription: string;
    serviceIcon: React.ReactNode;
}

const WhatWeDoCard = ({serviceTitle, serviceDescription, serviceIcon}: WhatWeDoCardProps) => {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-purple-700 p-0.5 rounded-3xl md:w-[50rem] w-11/12 h-[35rem] md:h-[45rem] mx-auto">
      <div className="bg-black p-6 rounded-3xl h-full flex items-center text-center justify-center">
        <div className='flex flex-col gap-2 items-center justify-center h-full'>
            <div>{serviceIcon}</div>
            <h2 className="text-white text-center text-[3.2rem] font-bold my-2">{serviceTitle}</h2>
            <p className="text-gray-400 text-lg w-96 leading-relaxed">
            {serviceDescription}
            </p>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDoCard;