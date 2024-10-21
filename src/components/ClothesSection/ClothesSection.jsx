import { defaultClothingItems } from "../../utils/constant";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
function ClothesSection({ onCardClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes__item-button">
        <p className="clothes__item">your item</p>
        <button className="clothes__button">Add new</button>
      </div>
      <ul className="clothes-section__items">
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              //pass as props
              onCardClick={onCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
