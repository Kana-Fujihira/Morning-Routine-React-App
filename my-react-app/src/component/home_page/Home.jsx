import { Link } from "react-router-dom";
import weather from "/src/assets/weather.png";
import todolist from "/src/assets/todolist.png";
import meditation from "/src/assets/meditation.png";

function Home() {
  return (
    <>
      <div>
        <div>
          <Link to="/weather">
            <img src={weather} alt="Weather Icon" />
            <p>Weather</p>
          </Link>
        </div>
        <div>
          <Link to="/todolist">
            <img src={todolist} alt="To Do List Icon" />
            <p>To Do List</p>
          </Link>
        </div>
        <div>
          <Link to="/meditation">
            <img src={meditation} alt="Meditation Icon" />
            <p>Meditatation</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
