import './Main.css';
import WeatherCard from '../WeatherCard/WeatherCard';
import CardSection from '../CardSection/CardSection';

function Main (props) {
    return (
        <main className="content">
            <WeatherCard getWeatherInfo = {props.getWeatherInfo}/>
            <CardSection getWeatherInfo = {props.getWeatherInfo} defaultClothingItems = {props.defaultClothingItems} openModal={props.openModal}/>
        </main>
    )
}

export default Main;