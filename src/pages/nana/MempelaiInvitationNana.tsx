import styles from "./../../css/module/Yudha.module.css";
import { FaInstagramSquare } from "react-icons/fa";
import useIntersectionObserver from "../../module/IntersectionObserver";
export default function MempelaiInvitationNana() {
  const [sectionRef, isVisible] = useIntersectionObserver();
  const [cardRef1, isCard1] = useIntersectionObserver();
  const [cardRef2, isCard2] = useIntersectionObserver();
  return (
    <section className={styles.mempelaiSection}>
      <div className={styles.mempelaiImage}>
        <div
          className={styles.introOverlayW}
          style={{
            transition: "all 1s linear",
            opacity: isVisible ? "1" : "0",
            visibility: isVisible ? "visible" : "hidden",
          }}
        >
          <h2 className={styles.initialName} ref={sectionRef}>
            N | Y
          </h2>
          <p className={styles.mempelaiDesc} style={{ textAlign: "center" }}>
            QS Ar-rum 21
          </p>
          <p className={styles.mempelaiDesc}>
            “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir”
          </p>
          <div className={styles.imageTagName}>
            <div className={styles.imageWrapperNana} ref={cardRef1}></div>
            <div
              className={styles.tagName}
              style={{
                transition: "all 1s linear",
                opacity: isCard1 ? "1" : "0",
                visibility: isCard1 ? "visible" : "hidden",
                transform: isCard1 ? "translateY(-40px)" : "translateY(0)",
              }}
            >
              <p className={styles.theNameNana}>
                Marcha Adhana Kadang, S.Ak Dg. Bunga
              </p>
              <p className={styles.theNameNanaParents}>
                (Putra dari Bapak Dominggus Kadang & Ibu Hasmawati)
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <FaInstagramSquare className={styles.igIcon} />
                <p>@marchaadhana04</p>
              </div>
            </div>
          </div>
          <h2
            style={{
              fontSize: "3.2rem",
              fontFamily: "Playwrite PL",
              marginBottom: "16px",
            }}
          >
            &
          </h2>
          <div className={styles.imageTagName}>
            <div className={styles.imageWrapperYudha} ref={cardRef2}></div>
            <div
              className={styles.tagName}
              style={{
                transition: "all 1s linear",
                opacity: isCard2 ? "1" : "0",
                visibility: isCard2 ? "visible" : "hidden",
                transform: isCard2 ? "translateY(-40px)" : "translateY(0)",
              }}
            >
              <p className={styles.theNameYudha}>
                Yudha Ramdhani, S.E Dg. Rapi
              </p>
              <p className={styles.theNameYudhaParents}>
                (Putra dari Bapak Dominggus Kadang & Ibu Hasmawati)
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                <FaInstagramSquare className={styles.igIcon} />
                <p>@yudhard7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
