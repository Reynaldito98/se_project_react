import './WeatherCard.css';
import React from 'react';

function WeatherCard (props) {
    return (
        <section className="weather-card" style={{
            backgroundImage: `url(${props.weather})`
        }}>
            <p className="weather-card__temperature">{props.weatherData.temperature[props.temperatureUnit.currentTemperatureUnit]}</p>
        </section>
    )
}

export default WeatherCard;