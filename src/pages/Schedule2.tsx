import myschedule from "./../assets/schedule2.png";
import Countdown2 from "./Countdown2";
import tutup from "./../assets/tutup.svg";
import PropTypes from "prop-types";
export default function Schedule2({ setOnO }) {
  return (
    <div className="midlePosition">
      <h2>
        RESEPSI <br />
        DI SULAWESI SELATAN
      </h2>
      <p style={{ marginTop: 0, width: "70%" }}>
        Dengan memohon Rahmat dan Ridho Allah, kami bermaksud menyelenggarakan
        Resepsi Pernikahan Anak/Kemanakan/Cucu kami, yang insya Allah akan
        dilaksanakan pada :
      </p>
      <div className="scheduleStyle">
        <img src={myschedule} alt="alabopa schedule" />
        <div className="scheduleDetail2">
          <h3>Pukul : 10.00 WITA</h3>
          <h3>
            Bertempat di jln poros Barombong Bontopajja RT02/RW02, kel. Lemban
            parang, Kec. Barombong, Kab. gowa
          </h3>
        </div>
      </div>
      <h2>Hitungan Mundur</h2>
      <Countdown2 />
      <div className="btnUndangan" onClick={() => setOnO(true)}>
        <h3>Turut Mengundang</h3>
        <img src={tutup} alt="tutup" />
      </div>
    </div>
  );
}

Schedule2.propTypes = {
  setOnO: PropTypes.func,
};
