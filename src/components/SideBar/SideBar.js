import './SideBar.css';
import headerAvatar from '../../images/avatar.jpg';

export default function SideBar() {
    return (
        <div className="sidebar__profile">
            <img src={headerAvatar} className="sidebar__avatar" alt="header avatar"></img>
            <p className="sidebar__username">Reynaldo Perez Pauli</p>
        </div>
    )
}