import React, { useState } from "react";

const Context = React.createContext({});

//utilizamos este contexto para saber cuadno cambia de tab y poder utilizarlo en cualquier modulo
export function TabContextProvider({ children }) {
  const [tab, setTab] = useState("personas");

  return (
    <Context.Provider value={{ tab, setTab }}>{children}</Context.Provider>
  );
}

export default Context;
