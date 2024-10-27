/* eslint-disable react/prop-types */

import { useState } from "react";

const BookModal = ({handleAddBook, handleCloseModal, bookUpdate}) => {

    const bookObject = {
        id: crypto.randomUUID(),
        bookName: '',
        authorName: '',
        url: '',
        rating: '',
        price: '',
        category: '',
        review: '',
        isFavorite: false
    };
    const [book, setBook] = useState(bookUpdate || bookObject);
    const [error, setErrors] = useState({});
    const [addBook] = useState(Object.is(bookUpdate, null));
    
    /*********** Modal Submit and close function *********/
    const handleSubmitClose = ()=>{
        if (Object.keys(formValidation()).length > 0) {
            setErrors(formValidation());
        }else{
            handleAddBook(book, addBook)
            handleCloseModal()
        }
    };



    /*********** Modal diye book make function *********/
    const handleBookChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        setBook({
            ...book,
            [name]: value
        })
    };

    /*********** Form validation function *********/
    const formValidation = ()=>{
        const newErrors = {};
        if (!book.bookName.trim()) {
            newErrors.bookName = 'Book Name is Required';
        }
        if (!book.authorName.trim()) {
            newErrors.authorName = 'Autrhor Name is Required'
        }
        if (!book.url.trim()) {
            newErrors.url = 'Url is Required'
        }
        if (!book.rating.trim()) {
            newErrors.rating = 'Rating is Required'
        }
        if (!book.price.trim()) {
            newErrors.price = 'price is Required'
        }
        if (!book.category.trim()) {
            newErrors.category = 'Category is Required'
        }
        if (!book.review.trim()) {
            newErrors.review = 'Review is Required'
        }
        return newErrors;
    }

    return (
        <>
            {/* Modal */}
            <div onClick={handleCloseModal} className="fixed w-full min-h-screen bg-black bg-opacity-85 z-50 flex items-center top-0 justify-center">
                <form
                    className="z-50 md:w-[1000px] xl:max-w-2xl bg-gray-700 dark:bg-[#262B28] border border-gray-200 dark:border-gray-600 rounded-lg p-8 space-y-6 overflow-auto h-[400px]"
                    onSubmit={e => e.preventDefault()}
                    onClick={e => e.stopPropagation()}
                >

                    {/* Form Fields */}
                    <div className="flex gap-5 justify-between">
                        <div className="space-y-6 text-white w-full">
                            <h2 className="text-2xl font-bold text-white h-10">Add a book</h2>
                            <div className="space-y-2 lg:space-y-3">
                                <label htmlFor="bookName">Book Name</label>
                                <input
                                    className="block w-full rounded-md dark:bg-[#121A16] dark:text-white text-gray-700 bg-gray-200 px-3 py-2.5"
                                    placeholder='Book Name'
                                    type="text"
                                    name="bookName"
                                    id="bookName"
                                    value={book.bookName}
                                    onChange={handleBookChange}
                                />
                                {error.bookName && <p className="text-yellow-500">{error.bookName}</p>}
                                
                            </div>

                            <div className="space-y-2 lg:space-y-3">
                                <label htmlFor="author">Author Name</label>
                                <input
                                    className="block w-full rounded-md dark:bg-[#121A16] dark:text-white text-gray-700 px-3 py-2.5 bg-gray-200"
                                    placeholder='Author Name'
                                    type="text"
                                    name="authorName"
                                    id="authorName"
                                    value={book.authorName}
                                    onChange={handleBookChange}
                                />
                                {error.authorName && <p className="text-yellow-500">{error.authorName}</p>}
                            </div>

                            <div className="space-y-2 lg:space-y-3">
                                <div className="space-y-2 lg:space-y-3">
                                    <label htmlFor="url">Image URL</label>
                                    <input
                                        className="block w-full rounded-md dark:bg-[#121A16] dark:text-white text-gray-700 px-3 py-2.5 bg-gray-200"
                                        placeholder='Book Img Url'
                                        type="url"
                                        name="url"
                                        id="url"
                                        value={book.url}
                                        onChange={handleBookChange}
                                    />
                                    {error.url && <p className="text-yellow-500">{error.url}</p>}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 text-white w-full">
                            <div className="flex justify-end">
                                <button
                                className="w-10 h-10 rounded-full bg-gray-400 text-2xl flex justify-center hover:bg-gray-200 hover:text-red-500"
                                onClick={handleCloseModal}
                                >x</button>
                            </div>
                            <div className="space-y-2 lg:space-y-3">
                                <label htmlFor="Rating">Rating</label>
                                <input
                                    className="block w-full rounded-md dark:bg-[#121A16] dark:text-white text-gray-700 px-3 py-2.5 bg-gray-200"
                                    placeholder='Book Rating'
                                    type="text"
                                    name="rating"
                                    id="rating"
                                    value={book.rating}
                                    onChange={handleBookChange}
                                />
                                {error.rating && <p className="text-yellow-500">{error.rating}</p>}
                            </div>

                            <div className="space-y-2 lg:space-y-3">
                                <label htmlFor="Price">Price</label>
                                <input
                                    className="block w-full rounded-md dark:bg-[#121A16] dark:text-white text-gray-700 px-3 py-2.5 bg-gray-200"
                                    placeholder='Book Price'
                                    type="text"
                                    name="price"
                                    id="price"
                                    value={book.price}
                                    onChange={handleBookChange}
                                />
                                {error.price && <p className="text-yellow-500">{error.price}</p>}
                            </div>

                            <div className="space-y-2 lg:space-y-3">
                                <label htmlFor="category">Category</label>
                                <input
                                    className="block w-full rounded-md dark:bg-[#121A16] dark:text-white text-gray-700 px-3 py-2.5 bg-gray-200"
                                    placeholder='Book Category'
                                    type="text"
                                    name="category"
                                    id="category"
                                    value={book.category}
                                    onChange={handleBookChange}
                                />
                                {error.category && <p className="text-yellow-500">{error.category}</p>}
                            </div>
                        </div>
                    </div>


                    <div className="space-y-2 lg:space-y-3 text-white">
                        <label htmlFor="review">Book Review</label>
                        <textarea
                            className="block w-full rounded-md dark:bg-[#121A16] dark:text-white text-gray-700 bg-gray-200 px-3 py-2.5"
                            placeholder='Book Review'
                            type="text"
                            name="review"
                            id="review"
                            value={book.review}
                            onChange={handleBookChange}
                        ></textarea>
                        {error.review && <p className="text-yellow-500">{error.review}</p>}
                    </div>


                    {/* Buttons */}
                    <div className="mt-6 flex justify-between">
                        <button
                            type="submit"
                            className="rounded w-full bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
                            onClick={handleSubmitClose}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default BookModal;