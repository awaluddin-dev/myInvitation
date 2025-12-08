import styles from "./../../css/module/Yudha.module.css";
import CarNana from "./CarNana";
import { MdAccessTimeFilled } from "react-icons/md";
import useIntersectionObserver from "../../module/IntersectionObserver";
export default function EventDateNana() {
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
          <CarNana />
          <div className={styles.eventDetails}>
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <div className={styles.eventName} style={{ width: "100%" }}>
                AKAD & RESEPSI
              </div>
            </div>
            <div className={styles.eventDate}>
              <div>
                <h3>07</h3>
                <div>
                  <h4>Minggu</h4>
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
                <p>10:00 WITA</p>
              </div>
              <p style={{ margin: "8px 8px 8px 0px", fontWeight: "600" }}>
                Lokasi Acara
              </p>
              <p style={{ fontWeight: "600" }}>Rumah Mempelai</p>
              <p>
                Jl. Jambu No.7, Losari, Kec. Ujung Pandang, Kota Makassar,
                Sulawesi Selatan 90113
              </p>
              <a
                href="https://www.google.com/maps/@-5.2185020,119.4360908,3a,74.999992y,201.372314h,70.438034t/data=!3m4!1e1!3m2!1swKioF0ety5Iw1IHJ9qkhQQ!2e0?lucs=,94213531,47071704,47069508,94218641,47084304,94208458,94208447&g_ep=CAISDTYuMTA5LjEuNTIxMjAYACCBgQEqPyw5NDIxMzUzMSw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICSUQ%3D&g_st=iw"
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
