import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddItemModal.css";

function AddItemModal({ closeActiveModal, onAddItem, isOpen }) {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [radio, setRadio] = useState("");
  const handleRadioChange = (e) => {
    console.log(e.target.value);
    setRadio(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl: link, weather: radio });
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      //   activeModal={activeModal}
      onClose={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{""}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="Image" className="modal__label">
        Image{""}
        <input
          type="url"
          className="modal__input"
          id="Image"
          placeholder="Image Url"
          name="link"
          value={link}
          onChange={handleUrlChange}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type</legend>
        <div className="modal__label-container">
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              name="temp"
              id="hot"
              type="radio"
              className="modal__radio-input"
              value="hot"
              onChange={handleRadioChange}
            />
            <span className="modal__span">Hot</span>
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              name="temp"
              id="warm"
              type="radio"
              className="modal__radio-input"
              value="warm"
              onChange={handleRadioChange}
            />
            <span className="modal__span">Warm</span>
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input
              name="temp"
              id="cold"
              type="radio"
              className="modal__radio-input"
              value="cold"
              onChange={handleRadioChange}
            />
            <span className="modal__span">Cold</span>
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
