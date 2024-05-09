import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
export const DarkContext = createContext();

export function DarkProvider({ children }) {
  const [dark, setDark] = useState(false);

  return (
    <DarkContext.Provider value={{ dark, setDark }}>
      {children}
    </DarkContext.Provider>
  );
}

DarkProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useDark = () => useContext(DarkContext);
