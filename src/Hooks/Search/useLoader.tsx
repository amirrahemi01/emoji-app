import React, { useEffect, useState } from 'react';
export default function useLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, []);

  return loading;
}