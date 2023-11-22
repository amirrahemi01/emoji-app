import React from 'react'
// components

import useFetchHook from '../Hooks/useFetchHook';
import useSearch from '../Hooks/useSearch';
import usePagination from '../Hooks/usePagination';
import useLoader from '../Hooks/useLoader';
import Header from '../Components/Header';
import Search from '../Components/Search';
import Main from '../Components/Main';
import Footer from '../Components/Footer';
import Loader from '../Components/Loader';
import Toggle from '../Components/Toggle';

import a from './Pages.module.css'

function Emoji() {

      // loader
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 3000)
  // }, [])

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
            {loading && <Loader />}
            <div className="app-container">
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