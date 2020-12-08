import { useEffect, useState } from 'react';
import { fetchWeather } from '../../api/weather';
import './weather.scss';

interface WeatherCurrent {
    description: string;
    icon: string;
    temp: string;
}
const Weather = () => {
    const [weatherCurr, setWeatherCurr] = useState<WeatherCurrent>();

    useEffect(() => {
        fetchWeather(setWeatherCurr);
    }, []);

    if (!weatherCurr) {
        return <div className="weather">Loading...</div>;
    }

    return <div className="weather">
        <div>
            <img src={`http://openweathermap.org/img/wn/${weatherCurr.icon}@2x.png`} alt={weatherCurr.description} />
        </div>
        <div className="weather-temp">
            {weatherCurr.temp} °C
        </div>
        <div>
            {weatherCurr.description}
        </div>
    </div>;
};

export default Weather;