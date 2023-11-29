import './App.css';
import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import ItemModal from '../ItemModal/ItemModal';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <ModalWithForm title="New garment" buttonText="Add garment" name="garment">
        <div>
          <fieldset className="modal__fieldset">
            <label className="modal__label">Name</label>
            <input type="text" placeholder="Name" className="modal__input"></input>
          </fieldset>

          <fieldset className="modal__fieldset">
            <label className="modal__label">Image</label>
            <input type="text" placeholder="Image URL" className="modal__input"></input>
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
      <ItemModal />
    </div>
  );
}

export default App;
