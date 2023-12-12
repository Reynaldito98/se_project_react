import './Main.css';
import WeatherCard from '../WeatherCard/WeatherCard';
import CardSection from '../CardSection/CardSection';

function Main (props) {
    return (
        <main className="content">
            <WeatherCard weather={props.weather} weatherData={props.weatherData}/>
            <CardSection defaultClothingItems = {props.defaultClothingItems} openModal={props.openImageModal} tempDescription={props.tempDescription} weatherData={props.weatherData}/>
        </main>
    )
}

export default Main;