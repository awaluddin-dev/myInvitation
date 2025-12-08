import "./LoveArdi.css";
import ardiFoto from "./../../assets/ardiindriFoto2.jpg";
import useIntersectionObserver from "../../module/IntersectionObserver";

export default function LoveArdi() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <div className="sectionPerkenalanArdi" id="loveArdi">
      <div className="secPositionHome" style={{ marginBottom: "9rem" }}>
        <div className="secAbsolute">
          <h1
            className={
              isVisible ? "ardiTitle1 fadeIn visible" : "ardiTitle1 fadeIn"
            }
            ref={sectionRef}
          >
            Love Story
          </h1>
          <div
            className={
              isVisible
                ? "loveArdiBorder fadeIn visible"
                : "loveArdiBorder fadeIn"
            }
            style={{ transitionDelay: "1s" }}
          >
            <img src={ardiFoto} alt="Foto Ardi" className="fotoLoveardi" />
          </div>
          <h2
            className={
              isVisible ? "ardiTitle2 fadeIn visible" : "ardiTitle2 fadeIn"
            }
            style={{ marginTop: "4rem" }}
          >
            Awal Cerita
          </h2>
          <hr
            className={isVisible ? "hrArdi fadeIn visible" : "hrArdi fadeIn"}
          />
          <p
            className={isVisible ? "fadeIn visible" : "fadeIn"}
            style={{ transitionDelay: "2s" }}
          >
            Berawal dari teman kuliah yang selalu mengganggu satu sama lain
            dengan niat bercandaan malah berujung jatuh cinta. Kisah ini dimulai
            pada tanggal 15 Maret 2020, lalu kemudian menjalani hubungan pacaran
            sampai saat ini. Kemudian ada niatan untuk memberanikan diri untuk
            melamar.
          </p>
          <h2
            className={
              isVisible ? "ardiTitle2 fadeIn visible" : "ardiTitle2 fadeIn"
            }
            style={{ marginTop: "4rem" }}
          >
            Lamaran
          </h2>
          <hr
            className={isVisible ? "hrArdi fadeIn visible" : "hrArdi fadeIn"}
          />
          <p
            className={isVisible ? "fadeIn visible" : "fadeIn"}
            style={{ transitionDelay: "3s" }}
          >
            Pada tanggal 14 Januari 2024 kami mengikat diri pada pertunangan dan
            pada tanggal 7 Februari 2024 kami pun mengadakan akad nikah.
          </p>
          <h2
            className={
              isVisible ? "ardiTitle2 fadeIn visible" : "ardiTitle2 fadeIn"
            }
            style={{ marginTop: "4rem" }}
          >
            Resepsi Pernikahan
          </h2>
          <hr
            className={isVisible ? "hrArdi fadeIn visible" : "hrArdi fadeIn"}
          />
          <p
            className={isVisible ? "fadeIn visible" : "fadeIn"}
            style={{ transitionDelay: "4s" }}
          >
            Insya allah untuk resepsi akan diadakan di tanggal 7-8 Februari 2024
          </p>
        </div>
      </div>
    </div>
  );
}
