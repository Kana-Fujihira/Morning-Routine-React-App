import { useState, useEffect } from "react";

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
    <div>
      <div>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="City Name"
        />
      </div>
      <div>
        <p>{data.name}</p>
        {data.main ? <h1>{data.weather[0].main}</h1> : null}
        <p>
          {data.main ? <p>{data.main.temp_min}</p> : null}
          {data.main ? <p>{data.main.temp_max}</p> : null}
        </p>
      </div>
    </div>
  );
}

export default Today;
