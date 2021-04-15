import { useState } from "react";

function useLocalStorage(key, initialValue=null) {
  const [storedValue, setStoredValue] = useState(initialValue);

  const setValue = (value) => {
    window.localStorage.setItem(key, value);
    setStoredValue(value);
  };

  return {val: storedValue, setVal: setValue};
}

export default useLocalStorage;