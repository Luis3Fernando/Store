import React, { createContext, useState } from "react";

export const ShoopingCartContext = createContext();

function Context({ children }) {
  const [count, setCount] = useState(0);
  const [isOpenAside, setIsOpenAside] = useState(false);
  const increment = () => {
    setCount(count + 1);
  };
  const OpenAside = () => setIsOpenAside(true)
  const CloseAside = () => setIsOpenAside(false)
  console.log("count: ", count);
  return (
    <ShoopingCartContext.Provider value={{
        count, 
        isOpenAside,
        setCount, 
        increment,
        OpenAside,
        CloseAside
        }}>
      {children}
    </ShoopingCartContext.Provider>
  );
}

export default Context;
