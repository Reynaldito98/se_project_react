import './ItemCard.css';

function ItemCard(props) {
    return (
            <li className="item-card" onClick={()=>{props.openModal(props.item)}}>
                <img src={props.item.imageUrl} alt={props.item.name} className="item-card__image"></img>
                <p className="item-card__title">{props.item.name}</p>
            </li>
    )
}

export default ItemCard;