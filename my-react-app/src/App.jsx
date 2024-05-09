import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "../src/component/common_part/Header";
import Footer from "../src/component/common_part/Footer";
import { useDark, DarkProvider } from "./context/Darkcontext";

function App() {
  const { dark } = useDark();

  return (
    <>
      <div className={dark === false ? "body dark" : "body light"}>
        <div className="headerPart">
          <Header />
        </div>
        <div className="containerAllPage">
          <div className="outletPart">
            <Outlet />
          </div>
          <div className="footerPart">
            <Footer />
          </div>
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
