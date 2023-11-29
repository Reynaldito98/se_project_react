import './Main.css';
import WeatherCard from '../WeatherCard/WeatherCard';
import CardSection from '../CardSection/CardSection';

function Main () {
    return (
        <main className="content">
            <WeatherCard />
            <CardSection />
        </main>
    )
}

export default Main;