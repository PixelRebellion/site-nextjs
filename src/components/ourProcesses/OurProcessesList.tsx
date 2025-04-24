import Design from "../../../public/assets/icons/Design";
import Development from "../../../public/assets/icons/Development";
import Discover from "../../../public/assets/icons/Discover";
import Launch from "../../../public/assets/icons/Launch";
import OurProcessesCard from "./OurProcessesCard";
import { processes } from "@/data/dataLists";

const OurProcessesList = () => {
    return (
        <div className='grid grid-cols-1 w-full md:w-auto md:grid-cols-2 gap-24 md:gap-48 items-center-safe justify-center my-8'>
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