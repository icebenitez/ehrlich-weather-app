import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import dayjs from "dayjs";

// custom hook
import useAuthValidator from "../hooks/useAuthValidator";

// UI
import Button from "@mui/material/Button";
import WeatherTable from "../components/WeatherTable";

const apiKey =
  process.env.REACT_APP_API_KEY || "adae9ddb6a8e7a9e378a4cdc0fbf1ccf";
console.log(apiKey);

const Weather = () => {
  useAuthValidator();
  const { city } = useParams();
  const [weather, setWeather] = useState({
    date: "",
    temp: "",
    description: "",
    main: "",
    pressure: "",
    humidity: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      // fetching
      const respFromGeoCoding = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=${apiKey}`
      );
      const dataFromGeoCoding = await respFromGeoCoding.json();
      const { lat, lon } = dataFromGeoCoding[0];
      const respFromWeatherApi = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
      );
      const dataFromWeatherApi = await respFromWeatherApi.json();

      // setting variables
      const targetWeather = dataFromWeatherApi.list[0];
      const dtText = targetWeather.dt_txt.slice(0, 10);
      const description = targetWeather.weather[0].description;

      const weatherObj = {
        date: dayjs(dtText, { format: "YYYY-MM-DD" }).format("MM/DD/YYYY"),
        temp: targetWeather.main.temp,
        description: description.charAt(0).toUpperCase() + description.slice(1),
        main: targetWeather.weather[0].main,
        pressure: targetWeather.main.pressure,
        humidity: targetWeather.main.humidity,
      };
      // console.log(weatherObj);
      setWeather(weatherObj);
    };
    getData();
  }, [city]);

  const handleBackButton = () => {
    navigate("/");
  };

  return (
    <>
      <WeatherTable weather={weather} />
      <Button
        onClick={() => handleBackButton()}
        sx={{ textAlign: "right" }}
        variant="outlined"
      >
        Back
      </Button>
    </>
  );
};

export default Weather;
