import './App.css';
import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ItemModal from '../ItemModal/ItemModal';
import Main from '../Main/Main';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { getWeatherInfo, defaultClothingItems } from '../../utils/utils';
import { currentDate } from '../../utils/constants';

function App() {
  const [modalOpened, setModalOpened] = React.useState(false);
  const [imageModalOpened, setImageModalOpened] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

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
      <Header getWeatherInfo = {getWeatherInfo} currentDate = {currentDate} openModal = {handleModalOpen}/>
      <Main defaultClothingItems = {defaultClothingItems} getWeatherInfo = {getWeatherInfo} openModal={handleImageModalOpen}/>
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
