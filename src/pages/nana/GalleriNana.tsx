import styles from "./../../css/module/Yudha.module.css";
import yud1 from "./../../assets/yud1.jpeg";
import yud2 from "./../../assets/yud2.jpeg";
import yud3 from "./../../assets/yud3.jpeg";
import yud4 from "./../../assets/yud4.jpeg";
import yud5 from "./../../assets/yud5.jpeg";
import yud6 from "./../../assets/yud6.jpeg";
import yud7 from "./../../assets/yud7.jpeg";
import yud8 from "./../../assets/yud8.jpeg";
import useIntersectionObserver from "../../module/IntersectionObserver";
export default function GalleriNana() {
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
            <div className={styles.hr}></div>
            <h2 className={styles.initialNameEvent}>Gallery</h2>
          </div>
          <div className={styles.galleryImages}>
            <div className={styles.gallery1}>
              <img src={yud1} alt="yudha" />
              <img src={yud2} alt="yudha" />
              <img src={yud3} alt="yudha" />
              <img src={yud4} alt="yudha" />
            </div>
            <div className={styles.gallery2}>
              <img src={yud5} alt="yudha" />
              <img src={yud6} alt="yudha" />
              <img src={yud8} alt="yudha" />
              <img src={yud7} alt="yudha" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
