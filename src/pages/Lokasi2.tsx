import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import pin from "./../assets/tempat.svg";
export default function Lokasi2() {
  return (
    <div className="midlePosition">
      <a
        href="https://www.google.com/maps?q=-5.2369368,119.4246789"
        target="_blank"
        rel="noreferrer"
        className="btnLokasi"
      >
        Buka Di Google Maps
        <img src={pin} alt="pin" className="pinSize" />
      </a>
      <MapContainer
        center={[-5.2369368, 119.4246789]}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: "30rem",
          width: "80%",
          marginTop: "2rem",
          border: "solid 2px #000",
          borderRadius: "10px",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[-5.2369368, 119.4246789]}
          icon={
            new Icon({ iconUrl: pin, iconSize: [25, 41], iconAnchor: [12, 41] })
          }
        >
          <Popup>Acara Pesta Mempelai Wanita</Popup>
        </Marker>
      </MapContainer>
      <h4 style={{ width: "60%" }}>
        Bertempat di jln poros Barombong Bontopajja RT02/RW02, kel. Lemban
        parang, Kec. Barombong, Kab. gowa
      </h4>
    </div>
  );
}
