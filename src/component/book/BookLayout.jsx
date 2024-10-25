import { useEffect, useState } from "react";
import Header from "../shared/Header";
import Book from "./Book";
import { getBookFromLocalStorage } from "../../utils/localStorage";

const BookLayout = () => {

    {/************* Book, Modal, list, search, bookupdate State **************/ }
    const [books, setBooks] = useState(getBookFromLocalStorage());
    const [showModal, setShowModal] = useState(false);
    const [list, setList] = useState(true);
    const [search, setSearch] = useState('');
    const [bookUpdate, setBookUpdate] = useState(null);

    {/************* grid list and normal list function **************/ }
    const handleList = ()=>{
        setList(!list)
    };
    
    {/************* Set Local Storage **************/ }
    useEffect(()=>{
        localStorage.setItem('books', JSON.stringify(books))
    }, [books]);
    
    {/************* Book Add Form Modal **************/ }
    const handleAddBook = (newBook, addBook) => {
        if(addBook){
            setBooks([...books, newBook]);
        }else{
            setBooks(
                books.map(book => {
                    if(book.id === newBook.id){
                        return newBook
                    }
                    return book;
                })
            )
        }
    };

    {/************* Modal open and close function **************/ }
    const handleModal = () => setShowModal(true);
    const handleCloseModal = () => (setShowModal(false), setBookUpdate(null));

    {/************* Handle Search **************/ }
    const handleSearch = (e)=>{
        const value = e.target.value;
        setSearch(value);
    }

    const handleEditBook = book=>{
        setBookUpdate(book);
        setShowModal(true)
    };

    return (
        <>
            <Header handleModal={handleModal}
            handleList={handleList}
            handleSearch={handleSearch}
            search={search}
            />
            <Book
                handleAddBook={handleAddBook}
                handleCloseModal={handleCloseModal}
                books={books}
                showModal={showModal} 
                setBooks={setBooks}
                list={list}
                handleSearch={handleSearch}
                search={search}
                handleEditBook={handleEditBook}
                bookUpdate={bookUpdate}
            />
        </>
    );
};

export default BookLayout;