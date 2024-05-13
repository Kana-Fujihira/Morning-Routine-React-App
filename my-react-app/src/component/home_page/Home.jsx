import { Link } from "react-router-dom";
import weather from "/src/assets/weather.png";
import todolist from "/src/assets/todolist.png";
import meditation from "/src/assets/meditation.png";
import "./home.css";

function Home() {
  return (
    <>
      <div>
        <div className="weatherPart">
          <Link to="/weather">
            <img src={weather} alt="Weather Icon" />
          </Link>{" "}
          <p>Check Today's Weather</p>
        </div>
        <div className="todolistPart">
          <Link to="/todolist">
            <img src={todolist} alt="To Do List Icon" />
          </Link>
          <p>What's Your Task ?</p>
        </div>
        <div className="meditationPart">
          <Link to="/meditation">
            <img src={meditation} alt="Meditation Icon" />
          </Link>
          <p>Get Ready With Fresh Mind</p>
        </div>
      </div>
    </>
  );
}

export default Home;
