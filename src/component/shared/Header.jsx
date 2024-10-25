/* eslint-disable react/prop-types */
import Search from '../book/Search'

const Header = ({handleModal, handleList, handleSearch, search}) => {
    return (
        <>
            <Search 
            handleModal={handleModal} 
            handleList={handleList} 
            handleSearch={handleSearch}
            search={search}
            />
        </>
    );
};

export default Header;