import React, { useState } from "react";

const Context = React.createContext({});

export function TabContextProvider({ children }) {
  const [tab, setTab] = useState("personas");

  return (
    <Context.Provider value={{ tab, setTab }}>{children}</Context.Provider>
  );
}

export default Context;
