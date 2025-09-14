import { useState } from "react";
import "./Weather.css"; // optional for styling

const API_KEY = "9fa8999e4e80625dc298a7a03924d0ff";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const checkWeather = async () => {
    if (!city) return;

    try {
      const response = await fetch(`${API_URL}${city}&appid=${API_KEY}`);
      if (response.status === 404) {
        setError(true);
        setData(null);
        return;
      }

      const result = await response.json();
      setData(result);
      setError(false);
    } catch (err) {
      console.error(err);
      setError(true);
      setData(null);
    }
  };

  const getIcon = (weather) => {
    switch (weather) {
      case "Clouds":
        return "/images/clouds.png";
      case "Rain":
        return "/images/rain.png";
      case "Clear":
        return "/images/clear.png";
      case "Drizzle":
        return "/images/drizzle.png";
      case "Mist":
        return "/images/mist.png";
      default:
        return "";
    }
  };

  return (
    <div className="weather">
      <div id="searchBar">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={checkWeather}>Search</button>
      </div>

      {error && <div className="error">City not found!</div>}

      {data && (
        <div className="hide">
          <h2 className="city">{data.name}</h2>
          <p className="temp">{Math.round(data.main.temp)}°c</p>
          <p className="humidity">Humidity: {data.main.humidity}%</p>
          <p className="wind">Wind: {data.wind.speed} km/h</p>
          <img className="icon" src={getIcon(data.weather[0].main)} alt="weather icon" />
        </div>
      )}
    </div>
  );
}

export default Weather;
