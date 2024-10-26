import "./DeleteItemModal.css";

function DeleteItemModal({ isOpen, handleCardDelete, onClose, selectedCard }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <p className="modal__delete-text">
          Are you sure you want to delete this item?
        </p>
        <p className="modal__delete-text">This action is irreversible.</p>
        <p className="modal__delete-text">HEllo</p>
        <div className="modal__delete-buttons-container">
          <button
            onClick={() => handleCardDelete(selectedCard)}
            className="modal__delete-confirmation"
            type="button"
          >
            Yes, delete item
          </button>
          <button
            onClick={onClose}
            type="button"
            className="modal__delete-cancelation"
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
