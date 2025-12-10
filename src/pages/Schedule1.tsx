import myschedule from "./../assets/schedule1.png";
import Countdown1 from "./Countdown1";
import tutup from "./../assets/tutup.svg";
import PropTypes from "prop-types";
export default function Schedule1({ setOnO }) {
  return (
    <div className="midlePosition">
      <h2>
        AKAD NIKAH & RESEPSI <br />
        DI SULAWESI TENGGARA
      </h2>
      <p style={{ marginTop: 0, width: "70%" }}>
        Dengan memohon Rahmat dan Ridho Allah, kami bermaksud menyelenggarakan
        Resepsi Pernikahan Anak/Kemanakan/Cucu kami, yang insya Allah akan
        dilaksanakan pada :
      </p>
      <div className="scheduleStyle">
        <img src={myschedule} alt="alabopa schedule" />
        <div className="scheduleDetail">
          <h3>Pukul : 10.00 WITA</h3>
          <h3>Bertempat di Lapasi-lapasi, lambai. Kolaka Utara</h3>
        </div>
      </div>
      <h2>Hitungan Mundur</h2>
      <Countdown1 />
      <div className="btnUndangan" onClick={() => setOnO(true)}>
        <h3>Turut Mengundang</h3>
        <img src={tutup} alt="tutup" />
      </div>
    </div>
  );
}

Schedule1.propTypes = {
  setOnO: PropTypes.func,
};
