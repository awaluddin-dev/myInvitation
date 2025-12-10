import styles from "../../css/module/Yudha.module.css";
import CountdownTimer from "../phoneContainer/CountdownTimer";

export default function IntroSection() {
  return (
    <section className={styles.introSection}>
      <div className={`${styles.intoImage}`}>
        <div className={styles.introOverlay}>
          <h3 className={styles.titleReguler}>THE WEDDING OF</h3>
          <h2 className={styles.nameTtile}>YUDHA & NANA</h2>
          <h3 className={styles.titleReguler}>SAVE THE DATE | 08 JULY 2024</h3>
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
}
