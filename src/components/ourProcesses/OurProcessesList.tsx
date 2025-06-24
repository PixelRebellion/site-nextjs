import { processes } from "@/utils/dataLists";
import OurProcessesCard from "./OurProcessesCard";

const OurProcessesList = () => {
    return (
        <div className='grid grid-cols-1 w-full md:w-auto xl:grid-cols-2 gap-24 md:gap-48 items-center-safe justify-center my-8'>
            {processes.map((process) => (
                <OurProcessesCard
                    key={process.id}
                    processTitle={process.title}
                    procesessDescription={process.description}
                    processIcon={process.icon}
                />
            ))}
        </div>
    )
}
export default OurProcessesList