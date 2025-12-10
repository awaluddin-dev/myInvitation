import styles from "../../css/module/Yudha.module.css";
import CountdownTimerNana from "../phoneContainer/CountdownTimerNana";
export default function IntroSectionNana() {
  return (
    <section className={styles.introSection}>
      <div className={styles.intoImage} style={{ transform: "scale(-1,1)" }}>
        <div
          className={styles.introOverlay}
          style={{ transform: "scale(-1,1)" }}
        >
          <h3 className={styles.titleReguler}>THE WEDDING OF</h3>
          <h2 className={styles.nameTtile}>NANA & YUDHA</h2>
          <h3 className={styles.titleReguler}>SAVE THE DATE | 07 JULY 2024</h3>
          <CountdownTimerNana />
        </div>
      </div>
    </section>
  );
}
