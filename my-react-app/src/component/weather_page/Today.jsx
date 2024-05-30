import { useState, useEffect } from "react";
import "./today.css";

function Today() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (location !== null) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f9a78b95b603f425ebcdcd9d16e540a9`
      )
        .then((res) => res.json())
        .then((json) => setData(json));
    }
  }, [location]);

  return (
    <>
      <div className="citySearch">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Tap City Name"
        />
      </div>
      <div className="todayWeather">
        <div>
          {data.main ? <h1>Your City is {data.name}</h1> : null}
          {data.weather ? (
            <h2>Today's weather is {data.weather[0].main}</h2>
          ) : null}
          {data.weather ? <p>{data.weather[0].description}</p> : null}
          <h3>{data.main ? <p> ↑{data.main.temp_max} C </p> : null}</h3>
          <h3>{data.main ? <p> ↓{data.main.temp_min} C</p> : null} </h3>

          <h3>{data.main ? <p>Humidity {data.main.humidity} % </p> : null}</h3>
        </div>
      </div>
    </>
  );
}


test test 
export default Today;
