import styled from "styled-components";
import yudvid from "./../../assets/Yudvid.mp4";
import yudvid1 from "./../../assets/Yudvid1.mp4";
import Lottie from "lottie-react";
import love from "../../assets/loveLottie.json";
import nana from "./../../assets/yud8.jpeg";
import yudha from "./../../assets/yud2.jpeg";
import styles from "./../../css/module/Yudha.module.css";
const Videobackgroundcontainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
  overflow: hidden;
  background-color: #000;
`;

const Videobackground = styled.video`
  position: absolute;
  top: 25%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: none;
  transform: translate(-50%, -50%) scale(1.2);
  z-index: 1; /* Ensure video is behind content */
`;
const Videobackground1 = styled.video`
  position: absolute;
  top: 75%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: none;
  transform: translate(-50%, -50%) scale(1.2);
  z-index: 1; /* Ensure video is behind content */
`;

const SealInvitationNana = ({ name, isVisible, setIsVisible, playMusic }) => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: "1002",
        top: "0",
        height: "100vh",
        width: "100%",
        transition: "all 1s linear",
        opacity: isVisible ? "0" : "1",
        visibility: isVisible ? "hidden" : "visible",
      }}
    >
      <Videobackgroundcontainer>
        <div
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
            backgroundColor: "rgb(0 0 0 / 30%)",
            zIndex: "2",
          }}
        >
          <h3
            className={styles.titleReguler}
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "2",
              fontWeight: "600",
              fontSize: "2rem",
              color: "#fff",
              width: "100%",
              textAlign: "center",
              fontFamily: "DM Serif Display",
              //   backgroundColor: "rgb(0 0 0 / 50%)",
            }}
          >
            THE WEDDING OF
          </h3>

          <h3
            className={styles.titleReguler}
            style={{
              position: "absolute",
              top: "45%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "2",
              fontWeight: "500",
              fontSize: "4rem",
              color: "#fff",
              width: "100%",
              textAlign: "center",
              fontFamily: "DM Serif Display",
            }}
          >
            YUDHA & NANA
          </h3>
          <h3
            className={styles.titleReguler}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "2",
              fontWeight: "600",
              fontSize: "2rem",
              color: "#fff",
              width: "100%",
              textAlign: "center",
              fontFamily: "DM Serif Display",
            }}
          >
            Dear
          </h3>
          <h3
            className={styles.titleReguler}
            style={{
              position: "absolute",
              top: "55%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "2",
              fontWeight: "500",
              fontSize: "2.2rem",
              color: "#fff",
              width: "100%",
              textAlign: "center",
              fontFamily: "DM Serif Display",
            }}
          >
            {`${name[0].toUpperCase()}${name.slice(1, name.length)}`}
          </h3>
          <h3
            className={styles.titleReguler}
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "2",
              fontWeight: "500",
              fontSize: "1.4rem",
              color: "#000",
              textAlign: "center",
              backgroundColor: "#fbfbfb",
              borderRadius: "10px",
              padding: "10px 20px",
            }}
            onClick={() => {
              setIsVisible(true);
              playMusic();
            }}
          >
            Buka Undangan
          </h3>
        </div>
        <div
          className={styles.fotoAnimationNana}
          style={{
            position: "absolute",
            height: "100px",
            top: "15%",
            left: "80%",
            transform: "translate(-50%, -50%) rotate(-15deg)",
            zIndex: "2",
            width: "100px",
            backgroundPosition: "-65px 225px",
            backgroundImage: `url(${nana})`,
            backgroundSize: "250%",
            borderRadius: "25px",
            border: "5px solid #fff",
          }}
        ></div>
        <Lottie
          animationData={love}
          loop={true}
          style={{
            position: "absolute",
            top: "5%",
            left: "80%",
            transform: "translate(-50%, -50%)",
            zIndex: "2",
            width: "50%",
          }}
        />
        <div
          className={styles.fotoAnimationYudha}
          style={{
            position: "absolute",
            height: "100px",
            top: "85%",
            left: "20%",
            transform: "translate(-50%, -50%) scale(-1, 1) rotate(15deg)",
            zIndex: "2",
            width: "100px",
            backgroundPosition: "-35px 180px",
            backgroundImage: `url(${yudha})`,
            backgroundSize: "250%",
            borderRadius: "25px",
            border: "5px solid #fff",
          }}
        ></div>
        <Lottie
          animationData={love}
          loop={true}
          style={{
            position: "absolute",
            top: "75%",
            left: "20%",
            transform: "translate(-50%, -50%)",
            zIndex: "2",
            width: "50%",
          }}
        />

        <Videobackground autoPlay loop muted>
          <source src={yudvid} type="video/mp4" />
          Your browser does not support the video tag.
        </Videobackground>
        <Videobackground1 autoPlay loop muted>
          <source src={yudvid1} type="video/mp4" />
          Your browser does not support the video tag.
        </Videobackground1>
      </Videobackgroundcontainer>
    </div>
  );
};

export default SealInvitationNana;
