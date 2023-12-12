import './Profile.css';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';

function Profile(props) {
    return (
        <main className="profile">
            <SideBar />
            <ClothesSection defaultClothingItems = {props.defaultClothingItems} openModal={props.openModal} openImageModal={props.openImageModal}/>
        </main>
    )
}

export default Profile;