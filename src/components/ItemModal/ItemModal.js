import '../ModalWithForm/ModalWithForm.css';
import './ItemModal.css';
import closeButton from '../../images/Group 119.png';
import React from 'react';

function ItemModal(props) {
    function handleClick(evt) {
        evt.preventDefault();
        props.onClose();
    }

    function handleRemoteClick(evt){
        if (evt.target === evt.currentTarget) { 
            handleClick(evt);
        }
    }

    React.useEffect(() => {
        function handleEscClose(evt) {
            if(evt.key === 'Escape') {
                handleClick(evt) ;   
            }
        }

        window.addEventListener('keydown', handleEscClose);

        return () => {
            window.removeEventListener('keydown', handleEscClose);
        }
    }, [])

    return (
        <div onMouseDown={handleRemoteClick} className={`modal modal-image ${(props.modalOpened)?'modal_opened':''}`}>
            <div className="modal-image__container">
                <img src={props.card.link} className="modal-image__image" alt="item picture"></img>
                <p className="modal-image__item-name">{props.card.name}</p>
                <p className="modal-image__weather">Weather: <span className="modal-image__weather-type">{props.card.weather}</span></p>
                <button className="modal-image__close-button" onClick={props.onClose}><img src={closeButton}></img></button>
            </div>
        </div>
    )
}

export default ItemModal;