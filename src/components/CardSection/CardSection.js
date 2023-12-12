import './CardSection.css';
import ItemCard from '../ItemCard/ItemCard';
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';

function CardSection(props) {
    return (
            <section className="card-section">
                <p className="card-section__heading">Today is {props.weatherData.temperature[props.temperatureUnit.currentTemperatureUnit]}/ You may want to wear:</p>

                <ul className="card-section__list">
                    {
                        props.defaultClothingItems.filter(card => card.weather === props.tempDescription).map(item => (
                            <ItemCard key={item._id} openModal={props.openModal} item={item}/>
                        ))
                    }
                </ul>
            </section>
    )
}

export default CardSection;