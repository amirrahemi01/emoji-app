import React from 'react';

// components

import useFetchHook from './Hooks/useFetchHook';
import useSearch from './Hooks/useSearch';
import usePagination from './Hooks/usePagination';

import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import Main from './Components/Main';
import Footer from './Components/Footer';


export type Emoji = {
  keywords: string;
  title: string;
  symbol: string;
};

function App() {

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

  return (
    <>
      <div className="app-container">
        {/* <img src="logo512.png" /> */}
        <Header />
        <Search
          search={setSearchValue}
          pageChoose={setCurrentPage}
        />
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
  );
}

export default App;
