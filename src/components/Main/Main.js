import './Main.css';
import WeatherCard from '../WeatherCard/WeatherCard';
import CardSection from '../CardSection/CardSection';
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';

function Main (props) {
    const temperatureUnit = React.useContext(CurrentTemperatureUnitContext);

    return (
        <main className="content">
            <WeatherCard weather={props.weather} weatherData={props.weatherData} temperatureUnit={temperatureUnit}/>
            <CardSection defaultClothingItems = {props.defaultClothingItems} openModal={props.openImageModal} tempDescription={props.tempDescription} weatherData={props.weatherData} temperatureUnit={temperatureUnit}/>
        </main>
    )
}

export default Main;