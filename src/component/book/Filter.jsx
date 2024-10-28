/* eslint-disable react/prop-types */
import { Button } from "flowbite-react";
import { CiFilter } from "react-icons/ci";

const Filter = ({ books, setBooks }) => {

    const handleSortByRating = () => {
        const shortsBook = [...books].sort((a, b) => a.rating - b.rating);
        setBooks(shortsBook);
    }
    const handleSortByPrice = () => {
        const shortsBook = [...books].sort((a, b) => a.price - b.price);
        setBooks(shortsBook);
    }
    const handleSortByName = () => {
        const shortsBook = [...books].sort((a, b) => a.bookName.localeCompare(b.bookName));
        setBooks(shortsBook);
    }

    return (
        <>
            <div className="flex space-x-3 my-11 px-4">
                <Button className="bg-white text-black  hover:text-white border-cyan-500 rounded-md focus:border-white flex items-center"><CiFilter className="text-2xl text-cyan-500 dark:text-black hover:text-white" /></Button>
                <Button onClick={handleSortByRating} className="bg-white text-black  hover:text-white border-cyan-500 rounded-md focus:border-white font-thin text-xs"><p className="text-[12px] md:text-sm">Filter by Rating</p></Button>
                <Button onClick={handleSortByPrice} className="bg-white text-black  hover:text-white border-cyan-500 rounded-md focus:border-white font-thin"><p className="text-[12px] md:text-sm">Filter by Price</p></Button>
                <Button onClick={handleSortByName} className="bg-white text-black  hover:text-white border-cyan-500 rounded-md focus:border-white font-thin text-xs"><p className="text-[12px] md:text-sm">Filter by Name</p></Button>
            </div>
        </>
    );
};

export default Filter;