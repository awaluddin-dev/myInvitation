import "./SectionHome.css";
import ardiFoto from "./../../assets/basoa.jpeg";
import flowerFoto from "./../../assets/circleLeave.png";
import moment from "moment-timezone";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
export default function SectionHome({ isVisible }:any) {
  const currentDate = moment().utcOffset("+08:00"); // Set the current date with UTC offset +08:00
  const targetDate1 = moment("2025-12-10T00:00:00").utcOffset("+08:00"); // Set the target date with UTC offset +08:00
  const targetDate2 = moment("2025-12-22T00:00:00").utcOffset("+08:00"); // Set the target date with UTC offset +08:00

  const [duration1, setDuration1] = useState(
    moment.duration(targetDate1.diff(currentDate))
  );
  const [duration2, setDuration2] = useState(
    moment.duration(targetDate2.diff(currentDate))
  );

  useEffect(() => {
    if(currentDate.isAfter(targetDate1)){
      setDuration1(moment.duration(0));
    }else{
      const intervalId1 = setInterval(() => {
        const now = moment().utcOffset("+08:00");
        const countdownDuration = moment.duration(targetDate1.diff(now));
        setDuration1(countdownDuration);

        if (countdownDuration.asSeconds() <= 0) {
          clearInterval(intervalId1);
          // Optionally, trigger some action when the countdown reaches zero
        }
      }, 1000);
    }

 if(currentDate.isAfter(targetDate2)){
      setDuration2(moment.duration(0));
    }else{
    const intervalId2 = setInterval(() => {
      const now = moment().utcOffset("+08:00");
      const countdownDuration = moment.duration(targetDate2.diff(now));
      setDuration2(countdownDuration);

      if (countdownDuration.asSeconds() <= 0) {
        clearInterval(intervalId2);
        // Optionally, trigger some action when the countdown reaches zero
      }
    }, 1000);

    // return () => clearInterval(intervalId1);
    // return () => clearInterval(intervalId2);
  }}, [targetDate1, targetDate2, currentDate]);
  const scrollInto = (e: any, nameId: string) => {
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
            Baso
            <br />
            & 
            <br/>
            Husni
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

          <h2
            className={
              isVisible ? "ardiTitle3 fadeIn visible" : "ardiTitle3 fadeIn"
            }
          >
            Mempelai Wanita 10 Desember 2025
                      <div
            className={
              isVisible
                ? "countTimerArdi fadeIn visible"
                : "countTimerArdi fadeIn"
            }
          >
            <div className="countCardArdi">
              <h2>{Math.floor(duration1.asDays())}</h2>
              <h2>Hari</h2>
            </div>
            <div className="countCardArdi">
              <h2>{duration1.hours().toString().padStart(2, "0")}</h2>
              <h2>Jam</h2>
            </div>
            <div className="countCardArdi">
              <h2>{duration1.minutes().toString().padStart(2, "0")}</h2>
              <h2>Menit</h2>
            </div>
            <div className="countCardArdi">
              <h2>{duration1.seconds().toString().padStart(2, "0")}</h2>
              <h2>Detik</h2>
            </div>
          </div>
            <br/>
            Mempelai pria 22 Desember 2025

                      <div
            className={
              isVisible
                ? "countTimerArdi fadeIn visible"
                : "countTimerArdi fadeIn"
            }
          >
            <div className="countCardArdi">
              <h2>{Math.floor(duration2.asDays())}</h2>
              <h2>Hari</h2>
            </div>
            <div className="countCardArdi">
              <h2>{duration2.hours().toString().padStart(2, "0")}</h2>
              <h2>Jam</h2>
            </div>
            <div className="countCardArdi">
              <h2>{duration2.minutes().toString().padStart(2, "0")}</h2>
              <h2>Menit</h2>
            </div>
            <div className="countCardArdi">
              <h2>{duration2.seconds().toString().padStart(2, "0")}</h2>
              <h2>Detik</h2>
            </div>
          </div>
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
