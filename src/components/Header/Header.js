import './Header.css';
import headerLogo from '../../images/logo.png';
import headerAvatar from '../../images/avatar.jpg';
import { makeApiRequest } from '../../utils/utils';
import React from 'react';
import { currentDate } from '../../utils/constants';

function Header() {
    const [cityName, setCityName] = React.useState('');

    function handleAddClothesButton () {
      document.querySelector('.modal_type_garment').classList.add('modal_opened');
    }

    React.useEffect(() => {
        makeApiRequest()
            .then(data => {
                setCityName(data.name);
            })
            .catch(err => console.log(err))
    })

    return (
        <header className="header">
            <div className="header__left-column">
                <img src={headerLogo} className="header__logo"></img>
                <p className="header__date-location">{currentDate}, {cityName}</p>
            </div>

            <div className="header__right-column">
                <button className="header__add-clothes-button" onClick={handleAddClothesButton}>+ Add clothes</button>
                <div className="header__profile">
                    <p className="header__username">Reynaldo Perez Pauli</p>
                    <img src={headerAvatar} className="header__avatar"></img>
                </div>
            </div>
        </header>
    )
}


export default Header;