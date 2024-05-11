import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "../src/component/common_part/Header";
import { useDark, DarkProvider } from "./context/Darkcontext";

function App() {
  const { dark } = useDark();

  return (
    <>
      <div className={dark === false ? "body light" : "body dark"}>
        <Header />
        <div className="containerAllPage">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default function AppWithProvider() {
  return (
    <DarkProvider>
      <App />
    </DarkProvider>
  );
}
