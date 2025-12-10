import { useRef, useState } from "react";
import PropTypes from "prop-types";
import bgPantai from "./../assets/bgpantai.mp4";
import ourSong from "./../assets/ourSong.mp3";
import playMusic from "./../assets/playMusic.svg";
import stopMusic from "./../assets/stopMusic.svg";
import FlowerTop1 from "./svg/FlowerTop1";
import FlowerTop2 from "./svg/FlowerTop2";
import ModalIntro from "./ModalIntro";
import butterGif from "./../assets/butterfly.gif";
import Tutup from "./../assets/tutup.svg";
import Man from "./svg/Man";
import Woman from "./svg/Woman";
import Beranda from "./svg/Beranda";
import Wt from "./svg/Wt";
import Komentar from "./svg/Komentar";
import Gift from "./svg/Gift";
import Tempat from "./svg/Tempat";
import "./Wrapper.css";
import { capitalizeEveryWord } from "./Capital";
import Love from "./svg/Love";
export default function Wrapper({
  children,
  name,
  transText1,
  sSudut,
  setsSudut,
  onB,
  setOnb,
  onW,
  setOnw,
  onT,
  setOnt,
  onG,
  setOng,
  onK,
  setOnk,
  onL,
  setOnL,
  onPerempuan,
  setOnperempuan,
  onPria,
  setOnpria,
  setOnO,
}) {
  const [onNav, setonNav] = useState(false);

  const [butSummon, setbutSummon] = useState(false);
  const [onFlower1, setonFlower1] = useState(false);
  const [onFlower2, setonFlower2] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [openUndangan, setOpenUndangan] = useState(false);
  const audioRef = useRef(null);
  const playMusicref = useRef(null);

  const handlePlayMusic = () => {
    setAudioEnabled(true);
    audioRef.current.play();
    audioRef.current.volume = 0.3;
  };

  const handleTutup = () => {
    audioRef.current.pause();
    audioRef.current.volume = 0.3;
    setAudioEnabled(false);
    setOpenUndangan(false);
    setsSudut(false);
    setOnb(false);
    setOnw(false);
    setOnt(false);
    setOng(false);
    setOnk(false);
    setOnL(false);
    handleunSummonF1();
    handleunSummonF2();
    handleunSummonbut();
  };

  const handleSummonbut = () => {
    setbutSummon(true);
  };

  const handleOnB = () => {
    setsSudut(false);
    setOnb(true);
    setOnw(false);
    setOnt(false);
    setOng(false);
    setOnk(false);
    setOnO(false);
    setOnL(false);

    handleSummonF1();
    handleunSummonF2();
    handleSummonbut();
  };
  const handleOnW = () => {
    setsSudut(true);
    setOnb(false);
    setOnw(true);
    setOnt(false);
    setOng(false);
    setOnk(false);
    setOnO(false);
    setOnL(false);

    handleunSummonF1();
    handleSummonF2();
    handleunSummonbut();
  };
  const handleOnT = () => {
    setsSudut(true);
    setOnb(false);
    setOnw(false);
    setOnt(true);
    setOng(false);
    setOnk(false);
    setOnO(false);
    setOnL(false);

    handleSummonF1();
    handleunSummonF2();
    handleunSummonbut();
  };
  const handleOnG = () => {
    setsSudut(false);
    setOnb(false);
    setOnw(false);
    setOnt(false);
    setOng(true);
    setOnk(false);
    setOnO(false);
    setOnL(false);

    handleunSummonF1();
    handleSummonF2();
    handleSummonbut();
  };
  const handleOnK = () => {
    setsSudut(false);
    setOnb(false);
    setOnw(false);
    setOnt(false);
    setOng(false);
    setOnk(true);
    setOnO(false);
    setOnL(false);

    handleSummonF1();
    handleunSummonF2();
    handleunSummonbut();
  };

  const handleOnL = () => {
    setsSudut(false);
    setOnb(false);
    setOnw(false);
    setOnt(false);
    setOng(false);
    setOnk(false);
    setOnO(false);
    setOnL(true);

    handleunSummonF1();
    handleSummonF2();
    handleSummonbut();
  };

  const handleSummonF1 = () => {
    setonFlower1(true);
  };

  const handlePria = () => {
    setOnpria(true);
    setOnperempuan(false);
    setOnO(false);
  };

  const handlePerempuan = () => {
    setOnpria(false);
    setOnperempuan(true);
    setOnO(false);
  };

  const handleSummonF2 = () => {
    setonFlower2(true);
  };
  const handleunSummonbut = () => {
    setbutSummon(false);
  };
  const handleunSummonF1 = () => {
    setonFlower1(false);
  };
  const handleunSummonF2 = () => {
    setonFlower2(false);
  };

  const handleStopMusic = () => {
    audioRef.current.pause();
    audioRef.current.volume = 0.3;
    setAudioEnabled(false);
  };

  return (
    <div className="bgWrapper">
      <div className="wrapper">
        <video autoPlay muted loop className="video">
          <source src={bgPantai} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <audio ref={audioRef} loop className="audio">
          <source src={ourSong} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
        <FlowerTop1 className={onFlower1 ? "flowerTop1 show" : "flowerTop1"} />
        <FlowerTop1
          className={onFlower1 ? "flowerBottom1 show" : "flowerBottom1"}
        />
        <FlowerTop2 className={onFlower2 ? "flowerTop2 show" : "flowerTop2"} />
        <FlowerTop2
          className={onFlower2 ? "flowerBottom2 show" : "flowerBottom2"}
        />

        {audioEnabled ? (
          <div className="musicTitle">
            <img
              src={playMusic}
              alt="play ourMusic alabopa"
              onClick={handleStopMusic}
              className="ourMusicPlay play"
            />
            <h5 className="musicName">¨Love Story¨</h5>
          </div>
        ) : (
          <div className="musicTitle">
            <img
              src={stopMusic}
              alt="stop ourMusic alabopa"
              ref={playMusicref}
              onClick={handlePlayMusic}
              className="ourMusicStop"
            />
            <h5 className="musicName stop">¨Pause Music¨</h5>
          </div>
        )}

        <img
          src={butterGif}
          alt="alabopa butterfly"
          className={butSummon ? "butterGif1 summon" : "butterGif1"}
        />
        <img
          src={butterGif}
          alt="alabopa butterfly"
          className={butSummon ? "butterGif2 summon" : "butterGif2"}
        />
        <div className={sSudut ? "navbarTop show" : "navbarTop"}>
          <div className={"navbarTitle"}>
            <h3 className="fontUp">Pilih acara</h3>
          </div>
          <div className="navbarTop-sec">
            <div className={"navbarWoman"} onClick={handlePerempuan}>
              <Woman className={onPerempuan ? "icSudut1 on" : "icSudut1"} />
              <h3 className="fontUp">Wanita</h3>
            </div>
            <div className={"navbarMan"} onClick={handlePria}>
              <h3 className="fontUp">Pria</h3>
              <Man className={onPria ? "icSudut2 on" : "icSudut2"} />
            </div>
          </div>
        </div>

        <div className={onNav ? "navBar show" : "navBar"}>
          <div className="navBar-iconic" onClick={handleOnB}>
            <Beranda className="icSize" act={onB} />
            <h3 style={{ color: `${onB ? "#f27880" : "#000"}` }}>Home</h3>
          </div>
          <div className="navBar-iconic" onClick={handleOnW}>
            <Wt className="icSize" act={onW} />
            <h3 style={{ color: `${onW ? "#f27880" : "#000"}` }}>Waktu</h3>
          </div>
          <div className="navBar-iconic" onClick={handleOnT}>
            <Tempat className="icSize" act={onT} />
            <h3 style={{ color: `${onT ? "#f27880" : "#000"}` }}>Tempat</h3>
          </div>
          <div className="navBar-iconic" onClick={handleOnG}>
            <Gift className="icSize" act={onG} />
            <h3 style={{ color: `${onG ? "#f27880" : "#000"}` }}>Hadiah</h3>
          </div>
          <div className="navBar-iconic" onClick={handleOnK}>
            <Komentar className="icSize" act={onK} />
            <h3 style={{ color: `${onK ? "#f27880" : "#000"}` }}>Pesan</h3>
          </div>
          <div className="navBar-iconic" onClick={handleOnL}>
            <Love className="icSize" act={onL} />
            <h3 style={{ color: `${onL ? "#f27880" : "#000"}` }}>Love</h3>
          </div>
          <div className="navBar-iconic" onClick={handleTutup}>
            <img src={Tutup} alt="tutup undangan" className="icSize" />
            <h3>Tutup</h3>
          </div>
        </div>
        <div className="content">{children}</div>
      </div>
      <ModalIntro
        name={capitalizeEveryWord(name)}
        openUndangan={openUndangan}
        setOpenUndangan={setOpenUndangan}
        sound={handlePlayMusic}
        summonBut={handleSummonbut}
        handleSummonF1={handleSummonF1}
        transText1={transText1}
        setOnb={setOnb}
        setonNav={setonNav}
      />
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  transText1: PropTypes.func,
  sSudut: PropTypes.bool,
  setsSudut: PropTypes.func,
  onB: PropTypes.bool,
  setOnb: PropTypes.func,
  onW: PropTypes.bool,
  setOnw: PropTypes.func,
  onT: PropTypes.bool,
  setOnt: PropTypes.func,
  onG: PropTypes.bool,
  setOng: PropTypes.func,
  onK: PropTypes.bool,
  setOnk: PropTypes.func,
  onL: PropTypes.bool,
  setOnL: PropTypes.func,
  onPerempuan: PropTypes.bool,
  setOnperempuan: PropTypes.func,
  onPria: PropTypes.bool,
  setOnpria: PropTypes.func,
  setOnO: PropTypes.func,
};
