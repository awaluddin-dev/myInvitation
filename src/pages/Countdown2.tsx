import { useEffect, useState } from "react";
import moment from "moment-timezone";
import "./Countdown.css";
export default function Countdown2() {
  const currentDate = moment().utcOffset("+08:00"); // Set the current date with UTC offset +08:00
  const targetDate = moment("2024-01-21T10:00:00").utcOffset("+08:00"); // Set the target date with UTC offset +08:00

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

  return (
    <div className="countdown">
      <div className="digit">
        <h4>{Math.floor(duration.asDays())}</h4>
        <h5>hari</h5>
      </div>
      <div className="digit">
        <h4>{duration.hours().toString().padStart(2, "0")}</h4>
        <h5>Jam</h5>
      </div>
      <div className="digit">
        <h4>{duration.minutes().toString().padStart(2, "0")}</h4>
        <h5>Menit</h5>
      </div>
      <div className="digit">
        <h4>{duration.seconds().toString().padStart(2, "0")}</h4>
        <h5>Detik</h5>
      </div>
    </div>
  );
}
