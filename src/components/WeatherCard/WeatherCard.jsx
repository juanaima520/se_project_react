import "./WeatherCard.css";
// import sunny from "../../assets/sunny.png";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";
import { weatherOptions } from "../../utils/constant";
import { defaultWeatherOptions } from "../../utils/constant";
function WeatherCard({ weatherData }) {
  const filterOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;

  if (filterOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filterOptions[0];
  }
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log(JSON.stringify(weatherOption));

  return (
    <section className="weather-card">
      <p className="weather__card-temp">
        {weatherData.temp[currentTemperatureUnit]} &deg;
        {currentTemperatureUnit}
      </p>
      <img
        src={weatherOption?.url}
        alt={`Card ${weatherOption?.day ? "day" : "night"} time ${
          weatherOption?.condition
        } weather`}
        className="weather-card__image"
      />
      {/* <img src={sunny} alt="sunny" className="weather-card__image" /> */}
    </section>
  );
}

export default WeatherCard;
