/* eslint-disable react/prop-types */
// import koran from '../../assets/images/koran2.png'
// import chollis from '../../assets/images/40 .png'

import BookModal from "./BookModal";
import BookList from "./BookList";
import Filter from "./Filter";

const Book = ({ books, setBooks, showModal, handleAddBook, handleCloseModal, list, search, handleEditBook, bookUpdate }) => {

    const displaySearch = books.filter(book => {
        return book.bookName.toLowerCase().includes(search.toLowerCase());
    });
    console.log(displaySearch)

    return (
        <>
            {showModal &&
                <BookModal
                handleAddBook={handleAddBook} 
                handleCloseModal={handleCloseModal}
                bookUpdate={bookUpdate}
                />
            }
            <Filter />
            {
                displaySearch.length > 0 ?
                    <BookList 
                        books={displaySearch} 
                        setBooks={setBooks}
                        list={list}
                        handleEditBook={handleEditBook}
                    /> :
                    <h1 className="text-3xl text-center font-bold mt-52">কোনো বই নাই বই যুক্ত করুন </h1>
            }
        </>
    );
};

export default Book;