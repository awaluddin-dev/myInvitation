import "./SectionHome.css";
import ardiFoto from "./../../assets/ardiindriFoto1.jpg";
import flowerFoto from "./../../assets/circleLeave.png";
import moment from "moment-timezone";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
export default function SectionHome({ isVisible }) {
  const currentDate = moment().utcOffset("+08:00"); // Set the current date with UTC offset +08:00
  const targetDate = moment("2024-02-07T10:30:00").utcOffset("+08:00"); // Set the target date with UTC offset +08:00

  const [duration, setDuration] = useState(
    moment.duration(targetDate.diff(currentDate))
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment().utcOffset("+08:00");
      const countdownDuration = moment.duration(targetDate.diff(now));
      setDuration(countdownDuration);

      if (countdownDuration.asSeconds() <= 0) {
        clearInterval(intervalId);
        // Optionally, trigger some action when the countdown reaches zero
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);
  const scrollInto = (e, nameId) => {
    const element = e.view.document.getElementById(nameId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="sectionHomeArdi" id="homeArdi">
      <div className="secPositionHome">
        <div className="secAbsolute">
          <h2 className="ardiTitle2">THE WEDDING OF</h2>
          <div
            className={
              isVisible
                ? "circleFotoArdi fadeIn visible"
                : "circleFotoArdi fadeIn"
            }
          >
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
          <h1
            className={
              isVisible ? "ardiTitle1 fadeIn visible" : "ardiTitle1 fadeIn"
            }
          >
            Ardi & Indri
          </h1>
          <p
            className={
              isVisible ? "marginTop2 fadeIn visible" : "marginTop2 fadeIn"
            }
          >
            Kami berharap Anda
          </p>
          <p className={isVisible ? "fadeIn visible" : "fadeIn"}>
            menjadi bagian dari hari istimewa kami.
          </p>
          <div
            className={
              isVisible
                ? "countTimerArdi fadeIn visible"
                : "countTimerArdi fadeIn"
            }
          >
            <div className="countCardArdi">
              <h2>{Math.floor(duration.asDays())}</h2>
              <h2>Hari</h2>
            </div>
            <div className="countCardArdi">
              <h2>{duration.hours().toString().padStart(2, "0")}</h2>
              <h2>Jam</h2>
            </div>
            <div className="countCardArdi">
              <h2>{duration.minutes().toString().padStart(2, "0")}</h2>
              <h2>Menit</h2>
            </div>
            <div className="countCardArdi">
              <h2>{duration.seconds().toString().padStart(2, "0")}</h2>
              <h2>Detik</h2>
            </div>
          </div>
          <h2
            className={
              isVisible ? "ardiTitle3 fadeIn visible" : "ardiTitle3 fadeIn"
            }
          >
            Rabu, 7 Februari 2024 - Kamis, 8 Februari 2024
          </h2>
          <div
            className={
              isVisible ? "btnSaveDate fadeIn visible" : "btnSaveDate fadeIn"
            }
            onClick={(e) => scrollInto(e, "dateArdi")}
          >
            Save The Date
          </div>
        </div>
      </div>
    </div>
  );
}

SectionHome.propTypes = {
  isVisible: PropTypes.bool,
};
