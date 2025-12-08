import alabopafull from "./assets/alabopafull.png";
import couple from "./assets/ourImage.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="myIntro">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href="#">
            <img src={alabopafull} className="logo" alt="Alabopa logo" />
          </a>
        </div>
        <h1 className="fs2p4r">Hai, Selamat Datang Di Alabopa</h1>
        <h2 className="fs2p4r">
          Alabopa merupakan perpaduaan antara Huruf A dan Labopa.
        </h2>
        <h2 className="fs2p4r">
          <span style={{ color: "#AC693E" }}>A</span> merupakan initial nama
          kami berdua yaitu Awal dan Andi Nila
        </h2>
        <h2 className="fs2p4r">
          Sedangkan untuk <span style={{ color: "#AC693E" }}>Labopa</span>{" "}
          Merupakan nama kampung halaman masing-masing yaitu Lapasi-pasi dan
          BontoPajja
        </h2>
        <h2 className="fs2p4r">
          Terus ini Website Apa ?, Website ini sebenarnya masih dalam tahap
          pengembangan yang bakalan masuk ke industri Technology
        </h2>
        <h3 style={{ fontSize: "1.2rem", textAlign: "center" }}>
          Creator by Awaluddin Hasan <br />
          contact Business : awal14h@gmail.com or +6285399589014
        </h3>
      </div>
      <img src={couple} className="ourLove" alt="ourLove" />
    </>
  );
}

export default App;
