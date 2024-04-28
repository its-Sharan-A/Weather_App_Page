import "./App.css";
import { useState } from "react";

const api = {
  key: "fc757b77d6dcc8d6678ecebbb3931a8e",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location  */}
            <p>Place : {weather.name}</p>

            {/* Temperature Celsius  */}
            <p>Temperature : {weather.main.temp}°C</p>

            {/* Condition */}
            <p>Weather condition : {weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;
