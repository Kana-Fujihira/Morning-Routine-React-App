import { Link } from "react-router-dom";
import "./footer.css";
import Home from "../../assets/home.png";
import Meditation from "../../assets/meditation.png";
import ToDo from "../../assets/todolist.png";
import Weather from "../../assets/weather.png";

function Footer() {
  return (
    <>
      <ul className="navBar">
        <Link to="/">
          <img src={Home} />
          <li>Home</li>
        </Link>
        <Link to="/weather">
          <img src={Weather} />
          <li>Weather</li>
        </Link>
        <Link to="/todolist">
          <img src={ToDo} />
          <li>ToDoList</li>
        </Link>
        <Link to="/meditation">
          <img src={Meditation} />
          <li>Meditation</li>
        </Link>
      </ul>
    </>
  );
}

export default Footer;
