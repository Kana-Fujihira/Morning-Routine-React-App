import { useDarkmode } from "../../context/Darkcontext";

function Header() {
  const { darkmode } = useDarkmode();

  return (
    <>
      <div>
        <button>{darkmode}</button>
      </div>
    </>
  );
}

export default Header;
