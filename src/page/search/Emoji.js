import React from 'react'

// components
import useFetchHook from '../../hooks/search/useFetchHook';
import useSearch from '../../hooks/search/useSearch';
import usePagination from '../../hooks/search/usePagination';
import useLoader from '../../hooks/search/useLoader';
import Header from '../../components/search/Header';
import Search from '../../components/search/Search';
import Main from '../../components/search/Main';
import Footer from '../../components/search/Footer';
import Loader from '../../components/search/Loader';
import Toggle from '../../components/toggle/Toggle';

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