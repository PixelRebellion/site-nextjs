import React, { JSX } from 'react'
import WhatWeDo from '../whatWeDo/WhatWeDo';
import OurProcesses from '../ourProcesses/OurProcesses';
import RebelWork from '../rebelWork/RebelWork';

interface InputItem {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface InputListProps {
    inputList: InputItem[];
}



const HeroList = ({inputList}: InputListProps) => {

    let InputCard: React.ComponentType<any>;
    switch (inputList) {
        case 1:
            InputCard = WhatWeDo;
            break;
        case 'processes':
            InputCard = OurProcesses;
            break;
        case 'works':
            InputCard = RebelWork;
            break;
        default:

             break;
    }



  return (
    <div className='grid grid-cols-1 w-full md:w-auto md:grid-cols-2 gap-8 md:gap-48 items-center justify-center my-8'>
        {inputList.map((input) => (
            <InputCard
                key={input.id}
                title={input.title}
                description={input.description}
                icon={input.icon}
            />
        ))}
    </div>
  )
}

export default HeroList