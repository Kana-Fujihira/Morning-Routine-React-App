import { useDarkmode } from "./context/Darkmodecontext";

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
