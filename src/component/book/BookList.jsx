/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";
import { FaEdit, FaRegHeart, FaHeart } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import BookDetails from "./BookDetails";
import { useState } from "react";

const BookList = ({ books, setBooks, list, handleEditBook }) => {

    const [selectBook, setSelectBook] = useState(null);

    /************** Book Details Modal Open and Close Function **************/
    const handlebook = book => setSelectBook(book);

    /************** Stop Propagation Function **************/
    const stopPropagation = e => e.stopPropagation();

    {/************* Delete Book from Booklist **************/ }
    const handleDeleteBook = bookId => {
        const bookAfterDelete = books.filter(book => book.id !== bookId);
        return setBooks(bookAfterDelete);
    };

    {/************* handle favorite function  **************/ }
    const handleFavorite = bookId => {
        const favorit = books.map(book => {
            if (book.id === bookId) {
                return {
                    ...book,
                    isFavorite: !book.isFavorite
                };
            } else {
                return book;
            };
        });
        setBooks(favorit);
    };

    return (
        <>
            {/* Book list 1 */}


            {
                selectBook ? 
                <BookDetails 
                selectBook={selectBook} 
                setSelectBook={setSelectBook}
                /> :
                list ?
                    <div className="md:grid md:grid-cols-3 text-center  md:gap-4 space-y-5">
                        {
                            books.map(book => (<Card onClick={()=>handlebook(book)} key={book.id} className="max-w-sm -z-0 text-center md:text-left md:mt-5">
                                <img className="h-[350px]" src={book.url} alt={book.url} />
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        {book.bookName}
                                    </h5>
                                </a>
                                <p onClick={stopPropagation} className="text-gray-500">{book.authorName}</p>
                                <div className="mb-5 mt-2.5 flex items-center justify-between">
                                    <div onClick={stopPropagation} className="flex items-center">
                                        <p className="mr-2 rounded bg-cyan-100 px-2.5 py-0.5 font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                                            {book.rating}
                                        </p>
                                        <svg
                                            className="h-5 w-5 text-yellow-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                    <div onClick={stopPropagation} className="flex items-center px-1">|</div>
                                    <p onClick={stopPropagation} className="text-gray-500">{book.category}</p>
                                    <div onClick={stopPropagation} className="flex justify-between items-center text-end">

                                        {/************* Edit Button  **************/}
                                        <button onClick={()=>handleEditBook(book)} className="p-1 m-1 text-xl focus:ring-1 rounded-md focus:ring-cyan-300 hover:text-yellow-500 border text-green-400" aria-label="Edit">
                                            <FaEdit />
                                        </button>


                                        {/************* favorite Button  **************/}
                                        <button
                                            onClick={() => handleFavorite(book.id)}
                                            className="p-1 m-1 text-xl focus:ring-1 rounded-md focus:ring-cyan-300 hover:text-yellow-500 border text-green-400" aria-label="Favorite"
                                        >
                                            {
                                                book.isFavorite ? <FaHeart className="text-red-600 hover:text-red-400 " /> : <FaRegHeart />
                                            }
                                        </button>

                                        {/************* Delete Button  **************/}
                                        <button
                                            className="p-1 m-1 text-xl focus:ring-1 rounded-md focus:ring-cyan-300 hover:text-red-700 border text-green-400" aria-label="Delete"
                                            onClick={() => handleDeleteBook(book.id)}
                                        >
                                            <MdOutlineDeleteForever />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span onClick={stopPropagation} className="flex items-center text-3xl font-bold text-cyan-700 dark:text-white">{book.price}<TbCurrencyTaka /></span>
                                    <button
                                        onClick={handlebook}
                                        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </Card>))
                        }
                    </div>

                    /* Booklist 2 */

                    :
                    <div className="md:grid md:grid-cols-3 text-center md:justify-items-center md:gap-4 space-y-5">
                        {books.map(book => (<Card onClick={()=>handlebook(book)} key={book.id} className="max-w-[28rem] text-center md:text-left md:mt-5">
                            <div className="flex gap-4">
                                <div>
                                    <img className="h-[155px] w-[115px]" src={book.url} alt="koran" />
                                </div>
                                <div>
                                    <a href="#">
                                        <h5 className="text-[16px] font-semibold tracking-tight text-gray-900 dark:text-white">
                                            {book.bookName}
                                        </h5>
                                    </a>
                                    <p onClick={stopPropagation} className="text-[12px] text-gray-500">{book.authorName}</p>
                                    <div className="mb-5 mt-2.5 flex items-center justify-between">
                                        <div onClick={stopPropagation} className="flex items-center">
                                            <p className="mr-2 text-[12px] rounded bg-cyan-100 px-2.5 py-0.5 font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                                                {book.rating}
                                            </p>
                                            <svg
                                                className="h-3 w-3 text-yellow-300"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>
                                        <div className="px-1">|</div>
                                        <p onClick={stopPropagation} className="text-gray-500 text-[12px]">{book.category} </p>
                                        <div onClick={stopPropagation} className="flex justify-between items-center text-end">

                                            {/************* Edit Button  **************/}
                                            <button
                                                onClick={()=>handleEditBook(book)}
                                                className="p-1 m-1 text-[12px] text-yellow-500 border">
                                                <FaEdit />
                                            </button>

                                            {/************* favorite Button  **************/}
                                            <button
                                                onClick={() => handleFavorite(book.id)}
                                                className="p-1 m-1 text-[12px] text-yellow-500 border">
                                                {
                                                    book.isFavorite ? <FaHeart className="text-red-600 hover:text-red-400 " /> : <FaRegHeart />
                                                }
                                            </button>

                                            {/************* Delete Button  **************/}
                                            <button
                                                onClick={() => handleDeleteBook(book.id)}
                                                className="p-1 m-1 text-[12px] text-red-700 border"
                                            >
                                                <MdOutlineDeleteForever />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span onClick={stopPropagation} className="flex items-center text-3xl font-bold text-cyan-700 dark:text-white">{book.price}<TbCurrencyTaka /></span>
                                        <button
                                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                        >
                                            But Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Card>))
                        }
                    </div>
            }

        </>
    );
};

export default BookList;