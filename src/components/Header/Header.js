import './Header.css';
import headerLogo from '../../images/logo.png';
import headerAvatar from '../../images/avatar.jpg';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import {Link} from 'react-router-dom';

function Header(props) {
    return (
            <header className="header">
                <div className="header__left-column">
                    <Link to='/'>
                        <img src={headerLogo} className="header__logo" alt="header logo"></img>
                    </Link>
                    <p className="header__date-location">{props.currentDate}, {props.cityName}</p>
                </div>

                <div className="header__right-column">
                    <ToggleSwitch handleChange={props.handleToggleSwitchChange}/>
                    <button className="header__add-clothes-button" onClick={props.openModal}>+ Add clothes</button>
                    <div className="header__profile">
                        <Link to='/profile' className="header__username">
                            <p>Reynaldo Perez Pauli</p>
                            <img src={headerAvatar} alt="header avatar" className="header__avatar"></img>
                        </Link>
                    </div>
                </div>
            </header>
    )
}


export default Header;