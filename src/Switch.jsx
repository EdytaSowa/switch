import Switch from "react-switch";
import { useState } from "react";
// import css from "./SwitchModal.module.css";

export const SwitchModal = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <>
      <Switch
        checked={checked}
        onChange={handleChange}
        handleDiameter={28}
        offColor="#fff"
        onColor="#fff"
        offHandleColor="#24CCA7"
        onHandleColor="#FF6596"
        height={30}
        width={70}
        borderRadius={50}
        uncheckedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 15,
              color: "orange",
              paddingRight: 2,
            }}
          ></div>
        }
        checkedIcon={false}
        uncheckedHandleIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 20,
              color: "white",
            }}
          >
            +
          </div>
        }
        checkedHandleIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              color: "white",
              fontSize: 18,
            }}
          >
            -
          </div>
        }
      />

      <p> Stan mojego switcha {`${checked}`} </p>
    </>
  );
};
