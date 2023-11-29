import './WeatherCard.css';
import React from 'react';
import daySunny from '../../images/sunny.png';
import dayRain from '../../images/dayRain.png';
import dayRainStorm from '../../images/DayRainStorm.png';
import dayCloudy from '../../images/daySunnyCloudy.png';
import daySnow from '../../images/daySnow.png';
import dayMist from '../../images/Cloudy.png'
import nightRainStorm from '../../images/NightRainStorm.png';
import nightRain from '../../images/nightRain.png';
import nightClear from '../../images/NightClear.png';
import nightCloudy from '../../images/NightCloudy.png';
import nightSnow from '../../images/NightSnow.png';
import nightMist from '../../images/NightMist.png';
import { makeApiRequest } from '../../utils/utils';

function WeatherCard () {
    const [temp, setTemp] = React.useState(0);
    const [weather, setWeather] = React.useState('');

    React.useEffect(() => {
        makeApiRequest()
            .then(data => {
                if((Date.now()/1000) > data.sys.sunset || (Date.now()/1000) < data.sys.sunrise){
                    if(data.weather[0].main === 'Thunderstorm'){
                        setWeather(nightRainStorm);
                    } else if(data.weather[0].main === 'Clear') {
                        setWeather(nightClear);
                    } else if(data.weather[0].main === 'Rain' || data.weather[0].main === 'Drizzle') {
                        setWeather(nightRain);
                    } else if(data.weather[0].main === 'Snow') {
                        setWeather(nightSnow);
                    } else if(data.weather[0].main === 'Atmosphere') {
                        setWeather(nightMist);
                    } else {
                        setWeather(nightCloudy);
                    }
                } else {
                    if(data.weather[0].main === 'Thunderstorm'){
                        setWeather(dayRainStorm);
                    } else if(data.weather[0].main === 'Clear') {
                        setWeather(daySunny);
                    } else if(data.weather[0].main === 'Rain' || data.weather[0].main === 'Drizzle') {
                        setWeather(dayRain);
                    } else if(data.weather[0].main === 'Snow') {
                        setWeather(daySnow);
                    } else if(data.weather[0].main === 'Atmosphere') {
                        setWeather(dayMist);
                    } else {
                        setWeather(dayCloudy);
                    }
                }
                setTemp(data.main.temp);
            })
            .catch(err => console.log(err))
    })

    return (
        <section className="weather-card" style={{
            backgroundImage: `url(${weather})`
        }}>
            <p className="weather-card__temperature">{Math.round(temp)}&#xb0;F</p>
        </section>
    )
}

export default WeatherCard;