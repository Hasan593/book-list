import { Button } from "flowbite-react";
import { CiFilter } from "react-icons/ci";

const Filter = () => {
    return (
        <>
            <div className="flex space-x-3 my-11 px-4">
                <Button className="bg-white text-black  hover:text-white border-cyan-500 rounded-md focus:border-white flex items-center"><CiFilter className="text-2xl text-cyan-500 dark:text-black hover:text-white" /></Button>
                <Button className="bg-white text-black  hover:text-white border-cyan-500 rounded-md focus:border-white font-thin text-xs"><p className="text-[12px] md:text-sm">Filter by Rating</p></Button>
                <Button className="bg-white text-black  hover:text-white border-cyan-500 rounded-md focus:border-white font-thin"><p className="text-[12px] md:text-sm">Filter by Price</p></Button>
                <Button className="bg-white text-black  hover:text-white border-cyan-500 rounded-md focus:border-white font-thin text-xs"><p className="text-[12px] md:text-sm">Filter by Name</p></Button>
            </div>
        </>
    );
};

export default Filter;