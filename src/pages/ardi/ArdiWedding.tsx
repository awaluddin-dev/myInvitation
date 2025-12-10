import ArdiWrapper from "./ArdiWrapper";
import { useParams } from "react-router-dom";
import SectionHome from "./SectionHome";
import SectionPerkenalan from "./SectionPerkenalan";
import LoveArdi from "./LoveArdi";
import DateArdi from "./DateArdi";
import GaleryArdi from "./GaleryArdi";
import AmplopArdi from "./AmplopArdi";
import KomentarArdi from "./KomentarArdi";
import PenutupArdi from "./PenutupArdi";
import NavbarArdi from "./NavbarArdi";
import ardiSong from "./../../assets/ardiSong.mp3";
import { useRef, useState } from "react";
import playArdi from "./../../assets/ardiPlay.png";
import stopArdi from "./../../assets/ardiStop.png";
import ModalArdi from "./ModalArdi";
export default function ArdiWedding() {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { name } = useParams();
  const audioRef = useRef(null);
  const playMusicref = useRef(null);
  const handlePlayMusic = () => {
    setAudioEnabled(true);
    audioRef.current.play();
    audioRef.current.volume = 0.3;
  };
  const handleStopMusic = () => {
    audioRef.current.pause();
    audioRef.current.volume = 0.3;
    setAudioEnabled(false);
  };
  return (
    <ArdiWrapper>
      <audio ref={audioRef} loop className="audio">
        <source src={ardiSong} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      <ModalArdi
        name={name}
        setMusic={handlePlayMusic}
        setTransition={setIsVisible}
      />
      <SectionHome isVisible={isVisible} />
      <SectionPerkenalan />

      <LoveArdi />
      <DateArdi />
      <GaleryArdi />
      <AmplopArdi />
      <KomentarArdi />

      <PenutupArdi />
      <NavbarArdi />
      {audioEnabled ? (
        <img
          src={playArdi}
          alt="play music"
          className="positionArdiMusic musicRolArdi"
          onClick={handleStopMusic}
        />
      ) : (
        <img
          src={stopArdi}
          alt="stop music"
          ref={playMusicref}
          className="positionArdiMusic"
          onClick={handlePlayMusic}
        />
      )}
      {/* <h1>{name}</h1> */}
    </ArdiWrapper>
  );
}
