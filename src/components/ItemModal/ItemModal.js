import './ItemModal.css';
import closeButton from '../../images/Group 119.png';
import React from 'react';

function ItemModal() {
    function handleClick(evt) {
        evt.preventDefault();
        document.querySelector('.modal-image').classList.remove('modal-image_opened');
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

        document.addEventListener('keydown', handleEscClose);

        return () => {
            document.removeEventListener('keydown', handleEscClose);
        }
    })

    return (
        <div onMouseDown={handleRemoteClick} className='modal-image'>
            <div className="modal-image__container">
                <img className="modal-image__image"></img>
                <p className="modal-image__item-name"></p>
                <p className="modal-image__weather">Weather: <span className="modal-image__weather-type"></span></p>

                <button className="modal-image__close-button" onClick={handleClick}><img src={closeButton}></img></button>
            </div>
        </div>
    )
}

export default ItemModal;