import { useState } from "react";

function useLocalStorage(key, initialValue=null) {
  const val = window.localStorage.getItem(key);
  const [storedValue, setStoredValue] = useState(val ? val:initialValue);

  const setValue = (value) => {
    window.localStorage.setItem(key, value);
    setStoredValue(value);
  };

  return [storedValue, setValue];
}

export default useLocalStorage;