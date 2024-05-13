import { useDark } from "../../context/Darkcontext";
import "./header.css";

function Header() {
  const { dark, setDark } = useDark();
  function toggleDark() {
    setDark(!dark);
  }

  return (
    <>
      <div>
      <input onClick={toggleDark} type="checkbox" id="toggle" />
      </div>
    </>
  );
}

export default Header;
