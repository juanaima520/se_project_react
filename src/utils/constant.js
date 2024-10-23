import clearNight from "../assets/night/sunny-night.png";
import clearDay from "../assets/day/sunny-day.png";
import cloudyDay from "../assets/day/cloudy-day.png";
import cloudyNight from "../assets/night/cloudy-night.png";
import rainDay from "../assets/day/rain-day.png";
import rainNight from "../assets/night/rain-night.png";
import stormDay from "../assets/day/storm-day.png";
import stormNight from "../assets/night/storm-night.png";
import snowDay from "../assets/day/snow-day.png";
import snowNight from "../assets/night/snow-night.png";
import fogDay from "../assets/day/fog-day.png";
import fogNight from "../assets/night/fog-night.png";
import defaultDay from "../assets/day/default-day.png";
import defaultNight from "../assets/night/default-night.png";

export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: clearDay,
  },
  {
    day: false,
    condition: "clear",
    url: clearNight,
  },
  {
    day: true,
    condition: "cloudy",
    url: cloudyDay,
  },
  {
    day: false,
    condition: "cloudy",
    url: cloudyNight,
  },
  {
    day: true,
    condition: "rain",
    url: rainDay,
  },
  {
    day: false,
    condition: "rain",
    url: rainNight,
  },
  {
    day: true,
    condition: "storm",
    url: stormDay,
  },
  {
    day: false,
    condition: "storm",
    url: stormNight,
  },
  {
    day: true,
    condition: "snow",
    url: snowDay,
  },
  {
    day: false,
    condition: "snow",
    url: snowNight,
  },
  {
    day: true,
    condition: "fog",
    url: fogDay,
  },
  {
    day: false,
    condition: "fog",
    url: fogNight,
  },
];
export const defaultWeatherOptions = [
  {
    day: true,
    condition: "default",
    url: defaultDay,
  },
  {
    day: false,
    condition: "default",
    url: defaultNight,
  },
];

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const coordinates = {
  latitude: 37.98904,
  longitude: 106.199677,
};

export const APIkey = "353e46fb4701b6b3e1bb1c98094dc1ce";
