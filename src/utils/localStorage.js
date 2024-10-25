export const getBookFromLocalStorage = () => {
    const books = localStorage.getItem('books');
    return JSON.parse(books) || [];
};

export const getThemeFormLocal = ()=>{
    const theme = localStorage.getItem('theme');
    return theme || 'dark';
};