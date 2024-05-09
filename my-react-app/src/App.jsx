import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "../src/component/common_part/Header";
import Footer from "../src/component/common_part/Footer";
import { DarkProvider } from "./context/Darkcontext";

function App() {
  return (
    <>
      <DarkProvider>
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
      </DarkProvider>
    </>
  );
}

export default App;
