import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
function ClothesSection({ onCardClick, clothingItems, addButtonClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes__item-button">
        <p className="clothes__item">your item</p>
        <button
          onClick={addButtonClick}
          className="clothes__button"
          type="button"
        >
          +Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => {
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
