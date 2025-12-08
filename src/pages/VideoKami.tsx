import "./EncryptName.css";
import ourVideo from "../assets/WeddingVideo.mp4";
import ourVideo1 from "./../assets/WeddingVideo2.mp4";
export default function VideoKami() {
  return (
    <div className="encryptWrapper">
      <a href={ourVideo} download>
        Download Video + Instrumen
      </a>
      <a href={ourVideo1} download>
        Download Videonya + Nyanyian
      </a>
    </div>
  );
}
