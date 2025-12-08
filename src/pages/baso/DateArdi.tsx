import "./DateArdi.css";
import waveArdi from "./../../../src/assets/ardiwave.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import pin from "./../../../src/assets/tempat.svg";
import useIntersectionObserver from "../../module/IntersectionObserver";
export default function DateArdi() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <div className="sectionHomeArdirot" id="dateArdi" ref={sectionRef}>
      <div className="secPositionHome">
        <div className={"secAbsolute"}>
          <img src={waveArdi} alt="wave ardi" className="waveArdi" />
          <h3 className={"titleDateArdi"}>Save The Date</h3>
          <div className={"ardiCardDate"}>
            <div className="ardiCards">
              <h3 className="titleCardDateArdi">Akad Nikah</h3>
              <h2 className="ardiTitle2">Rabu, 10 Desember 2025</h2>
              <p>Desa Batuganda Permai</p>
            </div>
          </div>
          <div
            className={isVisible ? "ardiMap fadeIn visible" : "ardiMap fadeIn"}
          >
            <MapContainer
              center={[-3.518254518508911, 120.92839813232422]}
              zoom={13}
              scrollWheelZoom={false}
              style={{
                height: "20rem",
                width: "80%",
                border: "5px solid #f3eeee",
                margin: " 0 auto",
                borderRadius: "10px",
              }}
              className="shadowArdiMap"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[-3.518254518508911, 120.92839813232422]}
                icon={
                  new Icon({
                    iconUrl: pin,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                  })
                }
              >
                <Popup>Akad Nikah</Popup>
              </Marker>
            </MapContainer>
          </div>
          <a
            href="https://www.google.com/maps?q=-3.518254518508911,120.92839813232422&z=17&hl=en"
            target="_blank"
            rel="noreferrer"
            className={
              isVisible ? "btnArdiMap fadeIn visible" : "btnArdiMap fadeIn"
            }
            style={{ marginBottom: "2rem" }}
          >
            <img
              src={pin}
              alt="pin"
              style={{ filter: "invert(1)", width: "6%" }}
            />
            Lihat Lokasi
          </a>
          <div className={"ardiCardDate"} style={{ transform: "none" }}>
            <div className="ardiCards">
              <h3 className="titleCardDateArdi">Resepsi</h3>
              <h2 className="ardiTitle2">Senin, 22 Desember 2025</h2>
              <p>Desa lapasi lapasi kec. Lambai kab Kolaka Utara</p>
            </div>
          </div>
          <div
            className={isVisible ? "ardiMap fadeIn visible" : "ardiMap fadeIn"}
          >
            <MapContainer
              center={[-3.6336958, 120.9854952]}
              zoom={13}
              scrollWheelZoom={false}
              style={{
                height: "20rem",
                width: "80%",
                border: "5px solid #f3eeee",
                margin: "5rem auto 0rem auto",
                borderRadius: "10px",
              }}
              className={"shadowArdiMap"}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[-3.6336958, 120.9854952]}
                icon={
                  new Icon({
                    iconUrl: pin,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                  })
                }
              >
                <Popup>ResepSi</Popup>
              </Marker>
            </MapContainer>
          </div>
          <a
            href="https://www.google.com/maps?q=-3.6336958,120.9880701&z=17&hl=en"
            target="_blank"
            rel="noreferrer"
            className={
              isVisible ? "btnArdiMap fadeIn visible" : "btnArdiMap fadeIn"
            }
            style={{ marginBottom: "9rem" }}
          >
            <img
              src={pin}
              alt="pin"
              style={{ filter: "invert(1)", width: "6%" }}
            />
            Lihat Lokasi
          </a>
        </div>
      </div>
    </div>
  );
}
