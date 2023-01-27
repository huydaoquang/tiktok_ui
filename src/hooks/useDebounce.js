import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debounceValue, SetDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => SetDebounceValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
