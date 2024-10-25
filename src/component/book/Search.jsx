/* eslint-disable react/prop-types */
import Logo from '../../assets/images/Book open.svg'
import { BiGridSmall } from "react-icons/bi";
import { FaRegHeart, FaPlus, FaList } from "react-icons/fa";
import { MdFolderDelete, MdDarkMode } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Button, Navbar } from "flowbite-react";
import { useEffect, useState } from 'react';
import { getThemeFormLocal } from '../../utils/localStorage';

const Search = ({ handleModal, handleList, handleSearch, search }) => {

    const [theme, setTheme] = useState(getThemeFormLocal);
    const [listIcon, setListIcon] = useState(true);

    /*********** Set Local Storage *********/
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.className = theme;
    }, [theme]);

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
    const icon = (()=> setListIcon(!listIcon));
    const handleIconList = ()=>(icon(), handleList())

    return (
        <>
            <Navbar fluid rounded className='my-5'>
                <Navbar.Brand href="#" className='md:mr-40'>
                    <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                </Navbar.Brand>
                <div className="flex">
                    <div className='relative'>

                        {/************ Search Input ***********/}
                        <input
                        type="search" 
                        name="" 
                        id="" 
                        placeholder='Search here' 
                        className="pl-8 rounded-md md:w-80" 
                        value={search}
                        onChange={handleSearch}
                        />
                        <CiSearch className='absolute ml-2 -translate-y-1/2 bottom-1/2 top-1/2' />
                    </div>
                    <Navbar.Toggle className='ml-5' />
                </div>
                <Navbar.Collapse className=''>

                    {/************ list button *************/}
                    
                    <Button
                        onClick={handleIconList}
                        className="flex items-center h-10 md:w-10 my-1"
                        >
                            {
                            listIcon ? <BiGridSmall className="text-4xl" /> :
                            <FaList className="text-[16px] font-bold" />
                            }
                    </Button>

                    {/************ Favorite button *************/}
                    <Button className="flex items-center h-10 md:w-10 my-1"><FaRegHeart className="text-2xl" /></Button>

                    {/************ Delete button *************/}
                    <Button className="flex items-center h-10 md:w-10 my-1"><MdFolderDelete className="text-3xl" /></Button>
                    <div className='relative justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none border border-transparent bg-cyan-700 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:focus:ring-cyan-800 dark:enabled:hover:bg-cyan-700 rounded-lg flex items-center h-10 md:w-10 my-1'>

                        {/********* Light button ********/}
                        <Button
                            onClick={toggleTheme}
                            className={`w-full absolute flex items-center h-10 md:w-10 my-1 ${theme === 'dark' ? 'opacity-100  scale-100' : 'opacity-0 scale-0'}`}>
                            <IoSunnyOutline className={`text-3xl transition-all duration-500 ease-in-out fill-current text-black transform ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'}`} />
                        </Button>

                        {/*   */}

                        {/********* dark button ********/}
                        <Button
                            onClick={toggleTheme}
                            className={`w-full absolute flex items-center h-10 md:w-10 my-1 ${theme === 'dark' ? 'opacity-0  scale-0' : 'opacity-100 scale-100'}`}>
                            <MdDarkMode className={`text-3xl transition-all duration-500 ease-in-out  fill-current text-white transform ${theme === 'dark' ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                        </Button>
                    </div>
                    <Button onClick={handleModal} className="flex items-center h-10 my-1"><FaPlus color="white" className="text-3xl" /><p className='mt-1 ml-2'>Add Books</p></Button>
                </Navbar.Collapse>
            </Navbar>
            <div className='w-full h-[1px] bg-blue-700'></div>
        </>
    );
};

export default Search;