import './ItemCard.css';

function ItemCard(props) {
    function handleItemCardClick() {
        document.querySelector('.modal-image').classList.add('modal-image_opened');
        document.querySelector('.modal-image__item-name').textContent = props.item;
        document.querySelector('.modal-image__weather-type').textContent = props.weather;
        document.querySelector('.modal-image__image').src = props.img;
    }

    return (
            <li className="item-card" onClick={handleItemCardClick}>
                <img src={props.img} alt="item_picture" className="item-card__image"></img>
                <p className="item-card__title">{props.item}</p>
            </li>
    )
}

export default ItemCard;