import './CardSection.css';
import ItemCard from '../ItemCard/ItemCard';
import React from 'react';
import { makeApiRequest, defaultClothingItems } from '../../utils/utils';

function CardSection() {
    const [temp, setTemp] = React.useState(0);
    const [weather, setWeather] = React.useState('')

    React.useEffect(() => {
        makeApiRequest()
            .then(data => {
                setTemp(data.main.temp);
                if(data.main.temp >= 86){
                    setWeather('hot');
                } else if(data.main.temp <= 65) {
                    setWeather('cold');
                } else {
                    setWeather('warm');
                }
            })
            .catch(err => console.log(err))
    })

    return (
        <section className="card-section">
            <p className="card-section__heading">Today is {Math.round(temp)}&#xb0;F/ You may want to wear:</p>

            <ul className="card-section__list">
                {
                    defaultClothingItems.filter(card => card.weather === weather).map(item => (
                        <ItemCard key={item._id} item={item.name} img={item.link} weather={item.weather}/>
                    ))
                }
            </ul>
        </section>
    )
}

export default CardSection;