import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export interface WeatherCurrent {
  description: string;
  icon: string;
  temp: string;
}
export const fetchWeather = async (setWether: Dispatch<SetStateAction<WeatherCurrent | undefined>>) => {
  const response = await axios.get(
    "http://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: "Auckland",
        appid: "c7a943193db5925dc1595600b3e90845",
        units: "metric",
      },
    }
  );

  setWether({ ...response.data.weather[0], ...response.data.main });
};
