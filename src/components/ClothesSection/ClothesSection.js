import './ClothesSection.css';
import ItemCard from '../ItemCard/ItemCard';

function ClothesSection(props) {
    return (
        <section className="clothes-section">
            <div className="clothes-section__heading">
                <p className="clothes-section__your-items">Your items</p>
                <button className="clothes-section__button" onClick={props.openModal}>+ Add new</button>
            </div>

            <ul className="clothes-section__list">
                    {
                        props.defaultClothingItems.map(item => (
                            <ItemCard key={item._id} openModal={props.openImageModal} item={item}/>
                        ))
                    }
            </ul>
        </section>
    )
}

export default ClothesSection;