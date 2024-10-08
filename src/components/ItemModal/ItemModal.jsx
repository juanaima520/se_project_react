import "./ItemModal.css";
import Close from "../../assets/CloseButton.svg";

function ItemModal({ activeModal, onClose, card }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} className="modal__close" type="button">
          <img src={Close} alt="" />
        </button>
        <img src={card.link} alt="" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">weather:{card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
