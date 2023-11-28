import React from 'react'

// components
import useFetchHook from '../../Hooks/Search/useFetchHook';
import useSearch from '../../Hooks/Search/useSearch';
import usePagination from '../../Hooks/Search/usePagination';
import useLoader from '../../Hooks/Search/useLoader';
import Header from '../../Components/Search/Header';
import Search from '../../Components/Search/Search';
import Main from '../../Components/Search/Main';
import Footer from '../../Components/Search/Footer';
import Loader from '../../Components/Search/Loader';
import Toggle from '../../Components/Toggle/Toggle';

import a from './Emoji.module.css'

function Emoji() {
    // call API 
    const fetchData = useFetchHook();

    // search
    const { filteredEmoji, setSearchValue } = useSearch(fetchData);

    // pagination and selecting the number of cards displayed
    const {
        currentPage,
        setCurrentPage,
        emojiPerPage,
        setEmojiPerPage,
        emojiList,
    } = usePagination(filteredEmoji);

    // loader
    const loading = useLoader();

    return (
        <>
            <div className="app-container">
                {loading && <Loader />}
                <div className={a.search_toggle}>
                    <Toggle />
                </div>
                <Header />
                <Search
                    search={setSearchValue}
                    pageChoose={setCurrentPage}
                />
                {/* <img src="logo512.png" /> */}
                <Main emojiList={emojiList} />
                <Footer
                    currentPage={currentPage}
                    pageChoose={setCurrentPage}
                    emojiPerPage={emojiPerPage}
                    allEmoji={filteredEmoji}
                    selectPerPage={setEmojiPerPage}
                />
            </div>
        </>
    )
}

export default Emoji