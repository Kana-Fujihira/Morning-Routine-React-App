import { useState, useEffect } from "react";

const api = {
  key: "f9a78b95b603f425ebcdcd9d16e540a9",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Today() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");

  const searchLocation = (event) => {
    useEffect(() => {
      if (event.key === "Enter") {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f9a78b95b603f425ebcdcd9d16e540a9`
        )
          .then((res) => res.json())
          .then((json) => setData(json));
        console.log(data);
      }
    }, [location]);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Put your Location"
        />
      </div>
    </div>
  );
}

export default Today;
