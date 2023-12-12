import './CardSection.css';
import ItemCard from '../ItemCard/ItemCard';
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';
import React from 'react';

function CardSection(props) {
    const temperatureUnit = React.useContext(CurrentTemperatureUnitContext);

    return (
            <section className="card-section">
                <p className="card-section__heading">Today is {props.weatherData.temperature[temperatureUnit.currentTemperatureUnit]}/ You may want to wear:</p>

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