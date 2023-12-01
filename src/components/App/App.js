import './App.css';
import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ItemModal from '../ItemModal/ItemModal';
import Main from '../Main/Main';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { getWeatherInfo, defaultClothingItems } from '../../utils/utils';
import { currentDate } from '../../utils/constants';
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

function App() {
  const [modalOpened, setModalOpened] = React.useState(false);
  const [imageModalOpened, setImageModalOpened] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [cityName, setCityName] = React.useState('');
  const [temp, setTemp] = React.useState(0);
  const [weather, setWeather] = React.useState('');
  const [tempDescription, setTempDescription] = React.useState('');

  React.useEffect(() => {
      getWeatherInfo()
          .then(data => {
              setCityName(data.name);
              setTemp(data.main.temp);

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
    }, [])

  function handleModalOpen() {
    setModalOpened(true);
  }

  function handleModalClose() {
    setModalOpened(false);
  }

  function handleImageModalOpen(card){
    setImageModalOpened(true);
    setSelectedCard(card);
  }

  function handleImageModalClose() {
    setImageModalOpened(false);
  }

  return (
    <div className="page">
      <Header currentDate = {currentDate} openModal = {handleModalOpen} cityName = {cityName}/>
      <Main defaultClothingItems = {defaultClothingItems} temp={temp} weather={weather} tempDescription={tempDescription} openModal={handleImageModalOpen}/>
        <ModalWithForm title="New garment" buttonText="Add garment" name="garment" modalOpened={modalOpened} onClose={handleModalClose}>
          <div>
            <fieldset className="modal__fieldset">
              <label className="modal__label" htmlFor="name">Name</label>
              <input type="text" placeholder="Name" className="modal__input" id="name"></input>
            </fieldset>
            <fieldset className="modal__fieldset">
              <label className="modal__label" htmlFor="image">Image</label>
              <input type="text" placeholder="Image URL" className="modal__input" id="image"></input>
            </fieldset>

            <fieldset className="modal__fieldset">
              <p className="modal__heading">Select the weather type</p>

              <div className="modal__input-container">
                <input type="radio" id="hot" name="weather" className="modal__radio"></input>
                <label htmlFor="hot" className="modal__label modal__label_radio">Hot</label>
              </div>
              <div className="modal__input-container">
                <input type="radio" id="warm" name="weather" className="modal__radio"></input>
                <label htmlFor="warm" className="modal__label modal__label_radio">Warm</label>
              </div>
              <div className="modal__input-container">
                <input type="radio" id="cold" name="weather" className="modal__radio"></input>
                <label htmlFor="cold" className="modal__label modal__label_radio">Cold</label>
              </div>
            </fieldset>
          </div>
        </ModalWithForm>
        <ItemModal onClose={handleImageModalClose} modalOpened={imageModalOpened} card={selectedCard}/>
      <Footer />
    </div>
  );
}

export default App;
