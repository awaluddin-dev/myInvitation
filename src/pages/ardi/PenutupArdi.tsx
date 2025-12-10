import ardiFoto from "./../../assets/ardiindriFoto1.jpg";
import flowerFoto from "./../../assets/circleLeave.png";
import waveArdi from "./../../../src/assets/ardiwave.png";
import useIntersectionObserver from "../../module/IntersectionObserver";

export default function PenutupArdi() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <div className="sectionHomeArdirot">
      <div className="secPositionHome">
        <div
          className={
            isVisible ? "secAbsolute fadeIn visible" : "secAbsolute fadeIn"
          }
        >
          <img
            src={waveArdi}
            alt="wave ardi"
            className="waveArdi"
            ref={sectionRef}
          />
          <img src={waveArdi} alt="wave ardi" className="waveArdirot" />
          <div className="circleFotoArdi">
            <div className="circleFoto1">
              <img
                src={ardiFoto}
                alt="ardi foto wedding"
                className="ardiHomefoto"
              />
            </div>
            <img
              src={flowerFoto}
              alt="flower circle"
              className="flowerCircle"
            />
          </div>
          <p>
            Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas
            kehadiran dan doa restunya, kami mengucapkan terima kasih.
          </p>
          <h1 className="ardiTitle4" style={{ margin: "1.5rem 0rem" }}>
            {"Wassalamu'alaikum Wr. Wb."}
          </h1>
          <h1 className="ardiTitle1" style={{ margin: "2.5rem 0rem" }}>
            Ardi & Indri
          </h1>
        </div>
      </div>
    </div>
  );
}
