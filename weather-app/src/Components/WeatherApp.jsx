import { useEffect, useState } from "react";
import "./WeatherApp.css";
import searchIcon from "../Assets/search.png";
import humidityIcon from "../Assets/humidity.svg";
import windIcon from "../Assets/wind.svg";
import cloudIcon from "../Assets/cloudy.svg";
import drizzleIcon from "../Assets/drizzle.svg";
import rainIcon from "../Assets/rain.svg";
import snowIcon from "../Assets/snow.svg";
import clearIcon from "../Assets/clear-day.svg";
import smokeIcon from "../Assets/smoke.svg";
import hazeIcon from "../Assets/haze.svg";
import axios from "axios";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [gotWeatherData, setGotWeatherData] = useState(false);
  const API_KEY = "fa5275b14fbe3e3a0cbeffa0ca1feee0";
  const iconPack = {
    Rain: rainIcon,
    Drizzle: drizzleIcon,
    Snow: snowIcon,
    Clear: clearIcon,
    Clouds: cloudIcon,
    Smoke: smokeIcon,
    Haze: hazeIcon,
  };

  const search = () => {
    const searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${
      city.length > 0 ? city : "Dehradun"
    }&units=Metric&appid=${API_KEY}`;

    axios
      .get(searchUrl)
      .then((response) => {
        setWeatherData(response.data);
        setGotWeatherData(true);
      })
      .catch((err) => console.log(err));

    setCity("");
  };

  const handleInput = (event) => {
    setCity(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  useEffect(() => {
    search();
  }, []);

  return (
    gotWeatherData && (
      <div className="container">
        {/* Top Bar = Searchbar + Search Icon */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter a city"
            className="city-input"
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            value={city}
          />
          <div className="search-icon" onClick={search}>
            <img src={searchIcon} alt="Search Icon" />
          </div>
        </div>

        <div className="weather-img">
          <img
            src={iconPack[weatherData.weather[0].main]}
            alt="Weather Image"
          />
        </div>

        <div className="weather-temp">
          {Math.floor(weatherData.main.temp)}°c
        </div>
        <div className="weather-location">{weatherData.name}</div>
        <div className="footer">
          <div className="element">
            <img src={humidityIcon} alt="Humidity Icon" className="icon" />
            <div className="data">
              <div className="info">{weatherData.main.humidity}%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={windIcon} alt="Wind Icon" className="icon" />
            <div className="data">
              <div className="info">
                {Math.floor(weatherData.wind.speed * 1.6)} <span>Kmph</span>
              </div>
              <div className="text">Wind</div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default WeatherApp;
