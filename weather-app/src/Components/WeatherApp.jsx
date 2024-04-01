import "./WeatherApp.css";
import searchIcon from "../Assets/search.png";
import humidityIcon from "../Assets/humidity.png";
import windIcon from "../Assets/wind.png";
import cloudIcon from "../Assets/cloud.png";

const WeatherApp = () => {
  return (
    <div className="container">
      {/* Top Bar = Searchbar + Search Icon */}
      <div className="search-bar">
        <input type="text" placeholder="Enter a city" className="city-input" />
        <div className="search-icon">
          <img src={searchIcon} alt="Search Icon" />
        </div>
      </div>

      <div className="weather-img">
        <img src={cloudIcon} alt="Weather Image" />
      </div>

      <div className="weather-temp">24°c</div>
      <div className="weather-location">London</div>
      <div className="footer">
        <div className="element">
          <img src={humidityIcon} alt="Humidity Icon" className="icon" />
          <div className="data">
            <div className="info">13%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="Wind Icon" className="icon" />
          <div className="data">
            <div className="info">20Kmph</div>
            <div className="text">Wind</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
