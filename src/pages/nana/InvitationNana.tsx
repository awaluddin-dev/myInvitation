import DefaultContainer from "../phoneContainer/DefaultContainer";
import IntroSectionNana from "./IntroSectionNana";
import MempelaiInvitationNana from "./MempelaiInvitationNana";
import EventDateNana from "./EventDateNana";
import GalleriNana from "./GalleriNana";
import WeddingGiftNana from "./WeddingGiftNana";
import UcapanNana from "./UcapanNana";
import yudasong from "./../../assets/yuShania.mp3";
import playArdi from "./../../assets/ardiPlay.png";
import stopArdi from "./../../assets/ardiStop.png";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import SealInvitationNana from "./SealInvitationNana";
export default function InvitationNana() {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { name } = useParams();
  const audioRef = useRef(null);
  const playMusicref = useRef(null);
  const handlePlayMusic = () => {
    setAudioEnabled(true);
    audioRef.current.play();
    audioRef.current.volume = 0.5;
  };
  const handleStopMusic = () => {
    audioRef.current.pause();
    audioRef.current.volume = 0.5;
    setAudioEnabled(false);
  };
  return (
    <DefaultContainer>
      <SealInvitationNana
        name={name}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        playMusic={handlePlayMusic}
      />
      <audio ref={audioRef} loop className="audio">
        <source src={yudasong} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      <IntroSectionNana />
      <MempelaiInvitationNana />
      <EventDateNana />
      <GalleriNana />
      <WeddingGiftNana />
      <UcapanNana />
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
    </DefaultContainer>
  );
}
