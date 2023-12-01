import '../ModalWithForm/ModalWithForm.css';
import './ItemModal.css';
import closeButton from '../../images/Group 119.png';
import React from 'react';

function ItemModal(props) {
    function handleClick() {
        props.onClose();
    }

    function handleRemoteClick(evt){
        if (evt.target === evt.currentTarget) { 
            handleClick();
        }
    }

    React.useEffect(() => {
        if (!props.modalOpened) return;
        function handleEscClose(evt) {
            if(evt.key === 'Escape') {
                handleClick() ;   
            }
        }

        window.addEventListener('keydown', handleEscClose);
        return () => {
            window.removeEventListener("keydown", handleEscClose);  // this removes the listener
        };
    }, [props.modalOpened])

    return (
        <div onMouseDown={handleRemoteClick} className={`modal modal-image ${(props.modalOpened)?'modal_opened':''}`}>
            <div className="modal-image__container">
                <img src={props.card.link} className="modal-image__image" alt={props.card.name}></img>
                <p className="modal-image__item-name">{props.card.name}</p>
                <p className="modal-image__weather">Weather: <span className="modal-image__weather-type">{props.card.weather}</span></p>
                <button className="modal-image__close-button" onClick={props.onClose}><img src={closeButton} alt="modal close button"></img></button>
            </div>
        </div>
    )
}

export default ItemModal;