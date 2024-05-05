import { Weather } from "../../assets/weather.png";
import { ToDoList } from "../../assets/todolist.png";
import { Meditation } from "../../assets/meditation.png";

function Home() {
  return (
    <>
      <div>
        <div>
          <img src={Weather} alt="Weather Icon" />
          <p>kana</p>
        </div>
        <div>
          <img src={ToDoList} alt="To Do List Icon" />
        </div>
        <div>
          <img src={Meditation} alt="Meditation Icon" />
        </div>
      </div>
    </>
  );
}

export default Home;
