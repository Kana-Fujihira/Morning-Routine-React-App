// import { useContext } from "react";
// import { DarkContext } from "../../context/Darkcontext";
import { useDark } from "../../context/Darkcontext";

function Header() {
  const { dark, setDark } = useDark();
  function toggleDark() {
    setDark(!dark);
  }

  return (
    <>
      <div>
        <button onClick={toggleDark}>Switch</button>
      </div>
    </>
  );
}

export default Header;
