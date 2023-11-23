import React, { useEffect, useState } from 'react';
import { Emoji } from '../../App';
// import axios from 'axios';
import RemoveDuplicates from './RemoveDuplicates';


export default function useLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, []);

  return loading;
}