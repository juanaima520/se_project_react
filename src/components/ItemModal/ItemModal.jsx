import "./ItemModal.css";
import Close from "../../assets/closeButtonWhite.svg";

function ItemModal({ activeModal, onClose, card }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          className="modal__close modal__close_type_white"
          type="button"
        >
          <img src={Close} alt="close" />
        </button>
        <img src={card.link} alt="modal image" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">weather:{card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
