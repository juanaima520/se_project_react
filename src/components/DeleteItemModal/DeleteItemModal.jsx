import "./DeleteItemModal.css";

function DeleteItemModal({ isOpen, handleCardDelete, onClose, selectedCard }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <p className="delete__text">
          Are you sure you want to delete this item? This action is
          irreversible.
        </p>
        <div className="delete__confirm-cancel">
          <button
            onClick={() => handleCardDelete(selectedCard)}
            className="delete__confirmation"
          >
            Yes, delete item
          </button>
          <button
            onClick={onClose}
            type="button"
            className="delete__cancelation"
          >
            Cancel
          </button>
        </div>
        <button onClick={onClose} type="button" className="modal__close">
          <img src="../src/assets/CloseButton.svg" alt="close" />
        </button>
      </div>
    </div>
  );
}

export default DeleteItemModal;
