/* eslint-disable react/prop-types */
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
// import { useState } from 'react';

const BookDetails = ({ selectBook, setSelectBook }) => {

    return (
        <>
            <div onClick={() => setSelectBook(null)} className="fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0    md:h-full items-center justify-center flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80">
                <div className="relative h-full w-full p-4 md:h-auto max-w-5xl">

                    <div onClick={e => e.stopPropagation()} className="relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700 overflow-auto">
                        <div className='flex items-center justify-between rounded-t border-b p-5 dark:border-gray-600 relative'>
                            <h3 className='text-xl font-medium text-cyan-400 dark:text-white'>
                                Book Details
                            </h3>
                            <div className='flex items-center gap-10'>
                                <button 
                                className='flex justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none border border-transparent text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:focus:ring-cyan-800 dark:enabled:hover:bg-cyan-700 rounded-lg w-8 items-center h-8 bg-gray-300'>
                                    {
                                        selectBook.isFavorite ? <FaHeart className="text-red-600 hover:text-red-400 " /> : <FaRegHeart />
                                    }
                                </button>
                                <button
                                    onClick={() => setSelectBook(null)}
                                    className='flex justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none border border-transparent text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:focus:ring-cyan-800 dark:enabled:hover:bg-cyan-700 rounded-lg w-8 items-center h-8 bg-gray-300'>
                                    <ImCross />
                                </button>
                            </div>
                        </div>





                        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6 p-6">
                            <img className="p-5 bg-cyan-50 max-w-[300px] rounded-md" src={selectBook.url} alt={selectBook.url} />
                            <div className="space-y-3 max-w-[600px]">
                                <div className='md:text-justify text-center'>
                                    <h1 className="leading-relaxed text-black font-bold text-3xl dark:text-gray-400">
                                        {selectBook.bookName}
                                    </h1>
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        {selectBook.authorName}
                                    </p>
                                </div>
                                <div className='text-center md:text-justify'>
                                    <h2 className="text-2xl font-bold">Book Review :</h2>
                                    <p>{selectBook.review}</p>
                                </div>
                                <div className='flex justify-center md:justify-start'>
                                    <button className="flex items-center gap-3 focus:ring-cyan-700 focus:outline-none w-40 ring-1 ring-cyan-400 hover:ring-2 p-1 rounded-full">
                                        <p className="h-8 w-24 text-[10px] md:text-[15px] justify-center p-3 bg-cyan-400 flex items-center rounded-full">Buy Now</p>
                                        <p className="font-bold flex items-center gap-1 text-cyan-400">120 <FaBangladeshiTakaSign /></p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default BookDetails;