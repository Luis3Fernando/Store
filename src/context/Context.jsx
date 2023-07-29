import React, { createContext, useState } from "react";

export const ShoopingCartContext = createContext();

function Context({ children }) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  console.log("count: ", count);
  return (
    <ShoopingCartContext.Provider value={{
        count, 
        setCount, 
        increment
        }}>
      {children}
    </ShoopingCartContext.Provider>
  );
}

export default Context;
