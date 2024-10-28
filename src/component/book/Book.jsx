/* eslint-disable react/prop-types */
// import koran from '../../assets/images/koran2.png'
// import chollis from '../../assets/images/40 .png'

import BookModal from "./BookModal";
import BookList from "./BookList";
import Filter from "./Filter";

const Book = ({ books, setBooks, showModal, handleAddBook, handleCloseModal, list, search, handleEditBook, bookUpdate }) => {

    console.log(books.length)

    const displaySearch = books.filter(book => {
        return book.bookName.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <>
            {showModal &&
                <BookModal
                    handleAddBook={handleAddBook}
                    handleCloseModal={handleCloseModal}
                    bookUpdate={bookUpdate}
                />
            }
            <Filter books={books} setBooks={setBooks}/>
            {
                books.length <= 0 ? <h1 className="text-3xl text-center py-36 bg-white font-bold">কোনো বই নাই দয়াকরে বই যুক্ত করুন</h1> :
                    displaySearch.length > 0 ?
                        <BookList
                            books={displaySearch}
                            setBooks={setBooks}
                            list={list}
                            handleEditBook={handleEditBook}
                        /> :
                        <h1 className="text-3xl text-center py-36 font-bold bg-white">কোনো বই পাওয়া যাইনি</h1>
            }
        </>
    );
};

export default Book;