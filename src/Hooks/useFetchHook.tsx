import React, { useEffect, useState } from 'react';
import { Emoji } from '../App';
// import axios from 'axios';
import RemoveDuplicates from './RemoveDuplicates';


export default function useFetchHook() {
    const [fetchData, setFetchData] = useState<Emoji[]>([]);

    useEffect(() => {
        fetch("https://emoji.ymatuhin.workers.dev/")
        .then((res) => res.json())
        .then((data) => setFetchData(RemoveDuplicates(data)));
    }, []);
  
    return fetchData;
}