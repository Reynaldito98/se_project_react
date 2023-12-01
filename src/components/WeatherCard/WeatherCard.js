import './WeatherCard.css';

function WeatherCard (props) {
    return (
        <section className="weather-card" style={{
            backgroundImage: `url(${props.weather})`
        }}>
            <p className="weather-card__temperature">{Math.round(props.temp)}&#xb0;F</p>
        </section>
    )
}

export default WeatherCard;