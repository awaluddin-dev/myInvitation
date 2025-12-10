import FlowerTop3 from "./svg/FlowerTop3";
import undanganBuka from "./../assets/bukaUndanagn.svg";
import PropTypes from "prop-types";
import but3 from "./../assets/butterfly3.gif";
import dab2 from "./../assets/daunback2.svg";
import "./ModalIntro.css";
export default function ModalIntro({
  name,
  sound,
  summonBut,
  handleSummonF1,
  transText1,
  openUndangan,
  setOpenUndangan,
  setOnb,
  setonNav,
}) {
  const openHandler = () => {
    sound();
    setOpenUndangan(true);
    summonBut();
    handleSummonF1();
    transText1(true);
    setOnb(true);
    setonNav(true);
  };

  return (
    <div className={openUndangan ? "transitionUn close" : "transitionUn"}>
      <div className="modalWrap">
        <img src={dab2} alt="flower daun alabopa" className="mydab1" />
        <img src={dab2} alt="flower daun alabopa" className="mydab2" />
        <img src={dab2} alt="flower daun alabopa" className="mydab3" />
        <img src={dab2} alt="flower daun alabopa" className="mydab4" />
        <FlowerTop3 className="flowerBottom3" />
        <div className="textModal">
          <h3>Kepada Bapak/Ibu/Saudara/i</h3>
          <h1 className="nameUndangan">{name}</h1>
          <h3>
            Tanpa Mengurangi Rasa Hormat. Kami Mengundang Anda Untuk Hadir Di
            Acara Pernikahan Kami.
          </h3>
          <div className="btnOpen" onClick={openHandler}>
            <h2>Buka</h2>
            <img src={undanganBuka} alt="buka undangan" />
          </div>
        </div>
        <img src={but3} alt="kupu kupu alabopa" className="butterfly3top" />
        <img src={but3} alt="kupu kupu alabopa" className="butterfly3bottom" />
      </div>
    </div>
  );
}

ModalIntro.propTypes = {
  name: PropTypes.string,
  sound: PropTypes.func,
  summonBut: PropTypes.func,
  handleSummonF1: PropTypes.func,
  transText1: PropTypes.func,
  openUndangan: PropTypes.bool,
  setOpenUndangan: PropTypes.func,
  setOnb: PropTypes.func,
  setonNav: PropTypes.func,
};
