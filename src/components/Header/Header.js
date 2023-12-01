import './Header.css';
import headerLogo from '../../images/logo.png';
import headerAvatar from '../../images/avatar.jpg';
import React from 'react';

function Header(props) {
    const [cityName, setCityName] = React.useState('');

    React.useEffect(() => {
        props.getWeatherInfo()
            .then(data => {
                setCityName(data.name);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <header className="header">
                <div className="header__left-column">
                    <img src={headerLogo} className="header__logo" alt="header logo"></img>
                    <p className="header__date-location">{props.currentDate}, {cityName}</p>
                </div>

                <div className="header__right-column">
                    <button className="header__add-clothes-button" onClick={props.openModal}>+ Add clothes</button>
                    <div className="header__profile">
                        <p className="header__username">Reynaldo Perez Pauli</p>
                        <img src={headerAvatar} className="header__avatar" alt="header avatar"></img>
                    </div>
                </div>
            </header>

            
        </>
    )
}


export default Header;