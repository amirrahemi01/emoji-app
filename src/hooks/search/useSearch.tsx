import React, { useState } from 'react';
import { Emoji } from '../../App';

export default function useSearch(fetchData: Emoji[]) {
    const [searchValue, setSearchValue] = useState("");
    const filteredEmoji: any = fetchData.filter((el: any) => {
        const fullSearch = searchValue.split(" ");
        return fullSearch.every(
            (word) =>
                el.keywords.toLowerCase().includes(word.toLowerCase()) ||
                el.title.toLowerCase().includes(word.toLowerCase())
        )
    })


    return { filteredEmoji: filteredEmoji, setSearchValue: setSearchValue }
}