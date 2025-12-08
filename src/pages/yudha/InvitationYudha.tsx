import DefaultContainer from "../phoneContainer/DefaultContainer";
import EventDateYudha from "./EventDateYudha";
import GalleriYudha from "./GalleriYudha";
import IntroSection from "./IntroSection";
import MempelaiInvitation from "./MempelaiInvitation";
import UcapanYudha from "./UcapanYudha";
import WeddingGift from "./WeddingGift";
import yudasong from "./../../assets/yuShania.mp3";
import playArdi from "./../../assets/ardiPlay.png";
import stopArdi from "./../../assets/ardiStop.png";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import SealInvitationYudha from "./SealInvitationYudha";
export default function InvitationYudha() {
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
      <SealInvitationYudha
        name={name}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        playMusic={handlePlayMusic}
      />
      <audio ref={audioRef} loop className="audio">
        <source src={yudasong} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      <IntroSection />
      <MempelaiInvitation />
      <EventDateYudha />
      <GalleriYudha />
      <WeddingGift />
      <UcapanYudha />
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
