import "./ToggleSwitch.css";
import { useContext, useState } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  const [checked, setChecked] = useState("");

  const handleChange = () => {
    handleToggleSwitchChange();
    setChecked(!checked);
  };
  return (
    <>
      <input
        className="switch__box"
        id={`react-switch-new`}
        type="checkbox"
        onChange={handleChange}
        checked={checked}
      />
      <label className="switch__label" htmlFor={`react-switch-new`}>
        <p className="text-f">F</p>
        <p className="text-c">C</p>
        <span className={`switch__button`} />
      </label>
    </>
  );
}

export default ToggleSwitch;
