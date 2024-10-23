import "./ItemModal.css";
import Close from "../../assets/closeButtonWhite.svg";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";

function ItemModal({
  activeModal,
  onClose,
  selectedCard,
  DeleteItemModal,
  handleCardDelete,
  handleDeleteClick,
}) {
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
        <img
          src={selectedCard.imageUrl}
          alt="modal image"
          className="modal__image"
        />

        <div className="modal__footer">
          <div className="modal__weather-caption">
            <h2 className="modal__caption">{selectedCard.name}</h2>
            <p className="modal__weather">weather:{selectedCard.weather}</p>
          </div>
          <button
            className="modal__delete"
            onClick={handleDeleteClick}
            //onClick={() => handleCardDelete(selectedCard)}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
