import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "../src/component/common_part/Header";
import Footer from "../src/component/common_part/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
