import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

export const APIkey = "353e46fb4701b6b3e1bb1c98094dc1ce";
export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error:${res.status}`);
    }
  });
};
export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = {
    F: Math.round(data.main.temp),
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };
  console.log(result.temp);
  //   weather.temperature.F = data.main.temp;
  // weather.temperature.C = Math.round((data.main.temp - 32) * 5/9);
  result.type = getWeatherType(data.main.temp.F);
  return result;
};
// const temp = getWeatherType?.temperature?.[CurrentTemperatureUnitContext];
const getWeatherType = (temperature) => {
  if (temperature >= 86) {
    return "hot";
  } else if (temperature >= 66) {
    return "warm";
  } else {
    return "cold";
  }
};

// const getWeatherType = (temperature) => {
//   if (temperature >= 30) {
//     return "hot";
//   } else if (temperature >= 18.9) {
//     return "warm";
//   } else {
//     return "cold";
//   }
// };
