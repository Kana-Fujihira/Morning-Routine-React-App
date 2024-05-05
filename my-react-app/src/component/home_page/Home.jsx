import weather from "/src/assets/weather.png";
import todolist from "/src/assets/todolist.png";
import meditation from "/src/assets/meditation.png";

function Home() {
  return (
    <>
      <div>
        <div>
          <img src={weather} alt="Weather Icon" />
          <p>Weather</p>
        </div>
        <div>
          <img src={todolist} alt="To Do List Icon" />
          <p>To Do List</p>
        </div>
        <div>
          <img src={meditation} alt="Meditation Icon" />
          <p>Meditatation</p>
        </div>
      </div>
    </>
  );
}

export default Home;
