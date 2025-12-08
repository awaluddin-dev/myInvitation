import styles from "./../../css/module/Yudha.module.css";
import CarYudha from "./CarYudha";
import { MdAccessTimeFilled } from "react-icons/md";
import useIntersectionObserver from "../../module/IntersectionObserver";

export default function EventDateYudha() {
  const [sectionRef, isVisible] = useIntersectionObserver();
  return (
    <section className={styles.mempelaiSection} ref={sectionRef}>
      <div className={styles.mempelaiImage}>
        <div
          className={styles.introOverlayW}
          style={{
            transition: "all 1s linear",
            opacity: isVisible ? "1" : "0",
            visibility: isVisible ? "visible" : "hidden",
            transform: isVisible ? "translateY(0px)" : "translateY(100%)",
            gap: "0px",
          }}
        >
          <div className={styles.tagIntro}>
            <h2 className={styles.initialNameEvent}>Wedding Event</h2>
            <div className={styles.hr}></div>
          </div>
          <CarYudha />
          <div className={styles.eventDetails}>
            <div
              style={{
                width: "25%",
                height: "100%",
              }}
            >
              <div className={styles.eventName}>RESEPSI</div>
            </div>
            <div className={styles.eventDate}>
              <div>
                <h3>08</h3>
                <div>
                  <h4>Senin</h4>
                  <h4>Juli</h4>
                  <h4>2024</h4>
                </div>
              </div>
              <div className={styles.hr}></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                  justifyContent: "flex-start",
                  fontSize: "1.4rem",
                  fontWeight: "500",
                }}
              >
                <MdAccessTimeFilled />
                <p>19:00 WITA</p>
              </div>
              <p style={{ margin: "8px 8px 8px 0px", fontWeight: "600" }}>
                Lokasi Acara
              </p>
              <p style={{ fontWeight: "600" }}>Gedung Haji Bate</p>
              <p>
                Jl. Tumanurung Raya, Kalegowa, Kec. Somba Opu, Kabupaten Gowa,
                Sulawesi Selatan 92115
              </p>
              <a
                href="https://www.google.com/maps/place/Haji+Bate+Building/@-5.1990458,119.4484207,17z/data=!3m1!4b1!4m6!3m5!1s0x2dbee239b424e11f:0x5690830ea7e9c6db!8m2!3d-5.1990458!4d119.4509956!16s%2Fg%2F11b778mqml?entry=ttu"
                target="_blank"
                rel="noreferrer"
                className={styles.btnMaps}
              >
                Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
