import React, { useEffect, useState } from 'react';
import { Emoji } from '../App';
// import axios from 'axios';
import RemoveDuplicates from './RemoveDuplicates';


export default function useLoader() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => setLoading(false), 3000)
    }, []);

    return loading; 
}