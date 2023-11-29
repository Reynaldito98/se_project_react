import './ModalWithForm.css';
import closeButton from '../../images/Group 119.svg';
import React from 'react';

function ModalWithForm(props) {
    function handleClick(evt) {
        evt.preventDefault();
        document.querySelector(`.modal_type_${props.name}`).classList.remove('modal_opened');
    }

    function handleRemoteClick(evt){
        if (evt.target === evt.currentTarget) { 
            handleClick(evt);
        }
    }

    React.useEffect(() => {
        function handleEscClose(evt) {
            if(evt.key === 'Escape') {
                handleClick(evt);    
            }
        }

        document.addEventListener('keydown', handleEscClose);

        return () => {
            document.removeEventListener('keydown', handleEscClose);
        }
    })

    return (
        <div onMouseDown={handleRemoteClick} className={`modal modal_type_${props.name}`}>
            <div className="modal__container">
                 <p>{props.title}</p>
    
                <form>
                    {props.children}
    
                    <button type="submit" className="modal__button">{props.buttonText}</button>
    
                    <button className="modal__close-button" onClick={handleClick}><img src={closeButton}></img></button>
                </form>
            </div>
        </div>
    )
}

export default ModalWithForm;