import { Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constant";
import Footer from "../Footer/Footer";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import { getItems, addItem, removeItem } from "../../utils/api";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: "" },
    city: "",
  });
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({
    _id: "",
    name: "",
    weather: "",
    link: "",
  });
  const [clothingItems, setClothingItems] = useState([]);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };
  const handleDeleteClick = () => {
    setActiveModal("delete");
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const onAddItem = (values) => {
    return addItem(values).then((res) => {
      console.log(res);
      const newItem = {
        ...values,
        _id: res._id,
      };
      setClothingItems([newItem, ...clothingItems]);
      closeActiveModal();
    });
  };

  const handleCardDelete = (card) => {
    removeItem(card._id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((currentCard) => card._id !== currentCard._id)
        );
        closeActiveModal();
      })
      .catch((err) => console.log(err));
  };

  // const handleOnConfirmDelete=()=>{
  //   handleCardDelete(card._id);
  // setActiveModal("delete");

  // }

  // const handleToggleSwitchChange = () => {
  //   if (currentTemperatureUnit === "F") {
  //     setCurrentTemperatureUnit("C");
  //   } else {
  //     setCurrentTemperatureUnit("F");
  //   }
  // };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filterData = filterWeatherData(data);
        console.log(filterData.temp);
        setWeatherData(filterData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <div>
            <Header handleAddClick={handleAddClick} weatherData={weatherData} />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    clothingItems={clothingItems}
                    onCardClick={handleCardClick}
                    addButtonClick={handleAddClick}
                  />
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
        <AddItemModal
          closeActiveModal={closeActiveModal}
          isOpen={activeModal === "add-garment"}
          onAddItem={onAddItem}
        />
        <ItemModal
          activeModal={activeModal}
          selectedCard={selectedCard}
          onClose={closeActiveModal}
          handleCardDelete={handleCardDelete}
          handleDeleteClick={handleDeleteClick}
        />
        <DeleteItemModal
          isOpen={activeModal === "delete"}
          handleCardDelete={handleCardDelete}
          handleDeleteClick={handleDeleteClick}
          selectedCard={selectedCard}
          onClose={closeActiveModal}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
