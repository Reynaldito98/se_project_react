import './Main.css';
import WeatherCard from '../WeatherCard/WeatherCard';
import CardSection from '../CardSection/CardSection';

function Main (props) {
    return (
        <main className="content">
            <WeatherCard temp={props.temp} weather={props.weather}/>
            <CardSection defaultClothingItems = {props.defaultClothingItems} openModal={props.openModal} temp={props.temp} tempDescription={props.tempDescription}/>
        </main>
    )
}

export default Main;