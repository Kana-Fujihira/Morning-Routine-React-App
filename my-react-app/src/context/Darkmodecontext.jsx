import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const DarkmodeContext = createContext();

export function DarkmodeProvider({ children }) {
  const [darkmode, setDarkmode] = useState("light");

  return (
    <DarkmodeContext.Provider value={{ darkmode, setDarkmode }}>
      {children}
    </DarkmodeContext.Provider>
  );
}

DarkmodeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useDarkmode = () => useContext(DarkmodeContext);
