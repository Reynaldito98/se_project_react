import './App.css';
import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ItemModal from '../ItemModal/ItemModal';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import AddItemModal from '../AddItemModal/AddItemModal';
import { getWeatherInfo } from '../../utils/utils';
import { getClothingItems, postClothingItem, deleteClothingItem } from '../../utils/api';
import { currentDate } from '../../utils/constants';
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';
import daySunny from '../../images/sunny.png';
import dayRain from '../../images/dayRain.png';
import dayRainStorm from '../../images/DayRainStorm.png';
import dayCloudy from '../../images/daySunnyCloudy.png';
import daySnow from '../../images/daySnow.png';
import dayMist from '../../images/Cloudy.png'
import nightRainStorm from '../../images/NightRainStorm.png';
import nightRain from '../../images/nightRain.png';
import nightClear from '../../images/NightClear.png';
import nightCloudy from '../../images/NightCloudy.png';
import nightSnow from '../../images/NightSnow.png';
import nightMist from '../../images/NightMist.png';
import {Switch, Route} from 'react-router-dom';   

function App() {
  const [modalOpened, setModalOpened] = React.useState(false);
  const [imageModalOpened, setImageModalOpened] = React.useState(false);
  const [confirmationModalOpened, setConfirmationModalOpened] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [cityName, setCityName] = React.useState('');
  const [tempF, setTempF] = React.useState(0);
  const [tempC, setTempC] = React.useState(0);
  const [weather, setWeather] = React.useState('');
  const [tempDescription, setTempDescription] = React.useState('');
  const [clothingItems, setClothingItems] = React.useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = React.useState('F');
  const weatherData = {
    temperature: {
      C: `${Math.round(tempC)}°C`,
      F: `${Math.round(tempF)}°F`
    }
  };

  React.useEffect(() => {
      getWeatherInfo()
          .then(data => {
              setCityName(data.name);
              setTempF(data.main.temp);
              setTempC((data.main.temp - 32) * 5/9);


              if((Date.now()/1000) > data.sys.sunset || (Date.now()/1000) < data.sys.sunrise){
                if(data.weather[0].main === 'Thunderstorm'){
                    setWeather(nightRainStorm);
                } else if(data.weather[0].main === 'Clear') {
                    setWeather(nightClear);
                } else if(data.weather[0].main === 'Rain' || data.weather[0].main === 'Drizzle') {
                    setWeather(nightRain);
                } else if(data.weather[0].main === 'Snow') {
                    setWeather(nightSnow);
                } else if(data.weather[0].main === 'Atmosphere') {
                    setWeather(nightMist);
                } else {
                    setWeather(nightCloudy);
                }
            } else {
                if(data.weather[0].main === 'Thunderstorm'){
                    setWeather(dayRainStorm);
                } else if(data.weather[0].main === 'Clear') {
                    setWeather(daySunny);
                } else if(data.weather[0].main === 'Rain' || data.weather[0].main === 'Drizzle') {
                    setWeather(dayRain);
                } else if(data.weather[0].main === 'Snow') {
                    setWeather(daySnow);
                } else if(data.weather[0].main === 'Atmosphere') {
                    setWeather(dayMist);
                } else {
                    setWeather(dayCloudy);
                }
            }

            if(data.main.temp >= 86){
              setTempDescription('hot');
            } else if(data.main.temp <= 65) {
              setTempDescription('cold');
            } else {
              setTempDescription('warm');
            }
          })
          .catch(err => console.log(err))


      getClothingItems()
        .then(data => {
          setClothingItems(data.reverse());
        })
    }, [])

  function handleModalOpen() {
    setModalOpened(true);
  }

  function handleModalClose() {
    setModalOpened(false);
  }

  function handleConfirmationModalOpen() {
    setConfirmationModalOpened(true);
  }

  function handleConfirmationModalClose() {
    setConfirmationModalOpened(false);  
  }

  function handleImageModalOpen(card){
    setImageModalOpened(true);
    setSelectedCard(card);
  }

  function handleImageModalClose() {
    setImageModalOpened(false);
  }

  function handleDeleteCard(evt) {
    evt.preventDefault();
    setImageModalOpened(false);
    setConfirmationModalOpened(false);
    deleteClothingItem(selectedCard._id)
      .then(() => {
        clothingItems.splice(clothingItems.indexOf(selectedCard), 1)
        setClothingItems([...clothingItems]);
      })
      .catch(err => {
        console.log(err);
      })
  }

  function handleAddItemSubmit( name, weather, imageUrl) {
    postClothingItem(name, weather, imageUrl)
      .then(data => {
        setClothingItems([data, ...clothingItems]);
      })
      .catch(err => console.log(err))
  }

  const handleToggleSwitchChange = () => {
    (currentTemperatureUnit === 'F')
      ? setCurrentTemperatureUnit('C')
      : setCurrentTemperatureUnit('F');
  };

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
          <Header currentDate={currentDate} openModal={handleModalOpen} cityName={cityName}/>
          <Switch>  
            <Route path="/profile">
              <Profile defaultClothingItems = {clothingItems} openModal={handleModalOpen} openImageModal={handleImageModalOpen}/>
            </Route>
            <Route path="/">
              <Main defaultClothingItems = {clothingItems} weather={weather} tempDescription={tempDescription} openImageModal={handleImageModalOpen} weatherData = {weatherData}/>
            </Route>
          </Switch>
          <ItemModal onClose={handleImageModalClose} modalOpened={imageModalOpened} card={selectedCard} onConfirmationModalOpen={handleConfirmationModalOpen}/>
          <AddItemModal modalOpened={modalOpened} handleClose={handleModalClose} onAddItem={handleAddItemSubmit}/>
          <ConfirmationModal modalOpened={confirmationModalOpened} onClose={handleConfirmationModalClose} handleDeleteCard={handleDeleteCard}/>
          <Footer />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
