import { createContext, useContext, useState } from "react";

//creo il context
const GlobalContext = createContext();
// esporto il provider
export const GlobalContextProvider = ({ children }) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
//esporto lo use
export const useGlobalContext = () => useContext(GlobalContext);
