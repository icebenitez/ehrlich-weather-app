import React from "react";
import useAuthValidator from "../hooks/useAuthValidator";

const Weather = () => {
  const [user] = useAuthValidator();

  return <div>Weather</div>;
};

export default Weather;
