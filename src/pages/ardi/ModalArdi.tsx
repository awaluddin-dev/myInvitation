import PropTypes from "prop-types";
import leaveTop from "./../../assets/leaveUp.png";
import doubleLeave from "./../../assets/bungaAtas.png";
import abstrack from "./../../assets/gradientArdi.png";
import foto from "./../../assets/ardiindriFoto6.jpeg";
import undangan from "./../../assets/bukaUndanagn.svg";
import { capitalizeEveryWord } from "../../module/Capital";
import { useState } from "react";
export default function ModalArdi({ name, setMusic, setTransition }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={open ? "modalArdiWrapper open" : "modalArdiWrapper"}>
      <img
        src={leaveTop}
        alt="leave top"
        style={{ width: "100%", position: "absolute", top: "0%", zIndex: "2" }}
      />
      <img src={foto} alt="ardi foto" className="ardiFotoDepan" />
      <img src={abstrack} alt="ardi latar" className="ardiBgM" />
      <div className="textPosition">
        <h2 style={{ fontWeight: "600", marginTop: "40rem" }}>
          THE WEDDING OF
        </h2>
        <h1
          className={"ardiTitle1"}
          style={{ fontSize: "4rem", color: "#000" }}
        >
          Ardi & Indri
        </h1>
        <p style={{ fontSize: "1.4rem" }}>Kepada Bapak/Ibu/Saudara/i </p>
        <h2
          style={{
            fontWeight: "600",
            margin: "0",
            fontSize: "2.4rem",
            color: "#000",
          }}
        >
          {capitalizeEveryWord(name)}
        </h2>
        <a
          href="#"
          rel="noreferrer"
          className="btnArdiMap"
          style={{
            marginTop: "3rem",
            fontSize: "1.2rem",
            fontWeight: "600",
          }}
          onClick={(e) => {
            e.preventDefault();
            setMusic();
            setTransition(true);
            setOpen(true);
          }}
        >
          <img
            src={undangan}
            alt="gift"
            style={{
              filter: "grayscale(100%) brightness(200%)",
              width: "20%",
              marginRight: "0.7rem",
            }}
          />
          Buka
        </a>
      </div>
      <img src={doubleLeave} alt="bunga bawah" className="leaveLeft" />
      <img src={doubleLeave} alt="bunga bawah" className="leaveRight" />
    </div>
  );
}
ModalArdi.propTypes = {
  name: PropTypes.string,
  setMusic: PropTypes.func,
  setTransition: PropTypes.func,
};
