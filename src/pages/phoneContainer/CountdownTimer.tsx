// src/CountdownTimer.jsx
import { useEffect, useState } from "react";
import styles from "./../../css/module/PhoneContainer.module.css";

const CountdownTimer = () => {
  //   const [timeLeft, setTimeLeft] = useState("");
  const [hari, setHari] = useState("");
  const [jam, setJam] = useState("");
  const [menit, setMenit] = useState("");
  const [detik, setDetik] = useState("");

  useEffect(() => {
    // Target date is July 8, 2024 in UTC+8
    const targetDate = new Date(Date.UTC(2024, 6, 8, 0, 0, 0)); // Month is 0-based, so 6 is July

    const updateTimer = () => {
      const now = new Date();
      const utc8Offset = 8 * 60 * 60 * 1000; // UTC+8 offset in milliseconds
      const timeRemaining = targetDate - (now.getTime() + utc8Offset);

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // setTimeLeft(
        //   `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
        // );
        setHari(days);
        setJam(hours);
        setMenit(minutes);
        setDetik(seconds);
      } else {
        setHari(0);
        setJam(0);
        setMenit(0);
        setDetik(0);
        // setTimeLeft("Time is up!");
      }
    };

    const intervalId = setInterval(updateTimer, 1000);

    // Initial call
    updateTimer();

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.countdownContainer}>
      <div className={styles.groupCountdown}>
        <p className={styles.CountdownTimer}>{hari}</p>
        <p className={styles.CountdownExp}>HARI</p>
      </div>
      <div className={styles.groupCountdown}>
        <p className={styles.CountdownTimer}>{jam}</p>
        <p className={styles.CountdownExp}>JAM</p>
      </div>
      <div className={styles.groupCountdown}>
        <p className={styles.CountdownTimer}>{menit}</p>
        <p className={styles.CountdownExp}>Menit</p>
      </div>
      <div className={styles.groupCountdown}>
        <p className={styles.CountdownTimer}>{detik}</p>
        <p className={styles.CountdownExp}>detik</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
