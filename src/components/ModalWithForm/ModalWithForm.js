import './ModalWithForm.css';
import closeButton from '../../images/Group 119.svg';
import React from 'react';

function ModalWithForm(props) {
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
        const handleEscClose = (evt) => {
            if(evt.key === 'Escape') {
                handleClick(evt);    
            }
        }

        window.addEventListener('keydown', handleEscClose);

        return () => {
            window.removeEventListener('keydown', handleEscClose);
        }
    }, [])

    return (
        <div onMouseDown={handleRemoteClick} className={`modal modal_type_${props.name} ${(props.modalOpened)?'modal_opened':''}`}>
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