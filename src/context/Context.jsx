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

  const [productToShow, setProductToShow] = useState({})
  return (
    <ShoopingCartContext.Provider value={{
        count, 
        isOpenAside,
        setCount, 
        increment,
        OpenAside,
        CloseAside,
        productToShow,
        setProductToShow
        }}>
      {children}
    </ShoopingCartContext.Provider>
  );
}

export default Context;
