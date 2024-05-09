import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const DarkContext = createContext();

export function DarkProvider({ children }) {
  const [darkmode, setDarkmode] = useState("light");

  return (
    <DarkContext.Provider value={{ darkmode, setDarkmode }}>
      {children}
    </DarkContext.Provider>
  );
}

DarkProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useDarkmode = () => useContext(DarkContext);
