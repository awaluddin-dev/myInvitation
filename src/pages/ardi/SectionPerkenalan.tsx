import "./SectionPerkenalan.css";
import bismillahArdi from "./../../assets/bismillahArdi.svg";
import ardiFoto from "./../../assets/ardiindriFoto2.jpg";
import flowerFoto from "./../../assets/circleLeave.png";
import useIntersectionObserver from "../../module/IntersectionObserver";
export default function SectionPerkenalan() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <div className="sectionPerkenalanArdi">
      <div className="secPositionPerkenalan">
        <div className="secAbsolute">
          <img
            src={bismillahArdi}
            alt="bismillah"
            className={
              isVisible ? "bismillahImg fadeIn visible" : "bismillahImg fadeIn"
            }
            ref={sectionRef}
          />
          <h1
            className={
              isVisible ? "ardiTitle4 fadeIn visible" : "ardiTitle4 fadeIn"
            }
            style={{ transitionDelay: "0.5s" }}
          >
            {"Assalamu'alaikum Wr. Wb."}
          </h1>
          <p className={isVisible ? "fadeIn visible" : "fadeIn"}>
            Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i
            serta Kerabat sekalian untuk menghadiri acara pernikahan kami:
          </p>

          <div
            className={
              isVisible
                ? "circleFotoArdi2 fadeIn visible"
                : "circleFotoArdi2 fadeIn"
            }
            style={{ transitionDelay: "1s" }}
          >
            <div className="circleFoto2">
              <img
                src={ardiFoto}
                alt="ardi foto wedding"
                className="ardiHomefoto1"
              />
            </div>
            <img
              src={flowerFoto}
              alt="flower circle"
              className={
                isVisible
                  ? "flowerCircle2 flowerFotoFade2 visible"
                  : "flowerCircle2 flowerFotoFade2"
              }
              style={{ transitionDelay: "2s" }}
            />
          </div>
          <h1
            className={
              isVisible ? "ardiTitle1 fadeIn visible" : "ardiTitle1 fadeIn"
            }
            style={{ transitionDelay: "1.5s" }}
          >
            Indri Amalia Nasir, SM
          </h1>
          <p
            className={isVisible ? "fadeIn visible" : "fadeIn"}
            style={{ transitionDelay: "2s" }}
          >
            Anak Kedua dari Bapak Muh. Nasir & Ibu Suharnati, S.Pd
          </p>

          <h1
            className={
              isVisible ? "ardiTitle1 fadeIn visible" : "ardiTitle1 fadeIn"
            }
            style={{ marginTop: "20px", transitionDelay: "2.5s" }}
          >
            &
          </h1>
          <div
            className={
              isVisible
                ? "circleFotoArdi2 fadeIn visible"
                : "circleFotoArdi2 fadeIn"
            }
            style={{ transitionDelay: "3s" }}
          >
            <div className="circleFoto2">
              <img
                src={ardiFoto}
                alt="ardi foto wedding"
                className="ardiHomefoto2"
              />
            </div>
            <img
              src={flowerFoto}
              alt="flower circle"
              className={
                isVisible
                  ? "flowerCircle2 flowerFotoFade2 visible"
                  : "flowerCircle2 flowerFotoFade2"
              }
              style={{ transitionDelay: "4s" }}
            />
          </div>
          <h1
            className={
              isVisible ? "ardiTitle1 fadeIn visible" : "ardiTitle1 fadeIn"
            }
            style={{ transitionDelay: "3.5s" }}
          >
            Hardiansyah Edy, A.Md
          </h1>
          <p
            className={isVisible ? "fadeIn visible" : "fadeIn"}
            style={{ transitionDelay: "4s" }}
          >
            Anak Kedua dari Bapak Edy & Ibu Hj. Fatmawati Mahyuddin
          </p>
        </div>
      </div>
    </div>
  );
}
