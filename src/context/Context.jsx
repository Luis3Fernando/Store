import React, { createContext, useState } from "react";

export const ShoopingCartContext = createContext();

function Context({ children }) {
  const [count, setCount] = useState(0);
  const [isOpenAside, setIsOpenAside] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const increment = () => {
    setCount(count + 1);
  };
  const OpenAside = () => setIsOpenAside(true)
  const CloseAside = () => setIsOpenAside(false)

  const OpenMenu = () => setIsOpenMenu(true)
  const CloseMenu = () => setIsOpenMenu(false)

  const [productToShow, setProductToShow] = useState({})

  const [cartProducts, setCartProducts] = useState([])

  const [order, setOrder] = useState([])
  return (
    <ShoopingCartContext.Provider value={{
        count, 
        isOpenAside,
        isOpenMenu,
        setCount, 
        increment,
        OpenAside,
        CloseAside,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        OpenMenu,
        CloseMenu,
        order,
        setOrder
        }}>
      {children}
    </ShoopingCartContext.Provider>
  );
}

export default Context;
