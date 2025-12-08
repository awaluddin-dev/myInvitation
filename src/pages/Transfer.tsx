import { useState } from "react";
import bca from "./../assets/bca.png";
import bri from "./../assets/bri.png";
import copy from "./../assets/copy.svg";
import cardBca from "./../assets/cardBca.png";
import cardBri from "./../assets/cardBri.png";
import "./Transfer.css";

export default function Transfer() {
  const [bankAktif, setBankAktif] = useState(true);
  const [copiedMessage, setCopiedMessage] = useState("");
  const textToCopy1 = "2900411173";
  const textToCopy2 = "166501011564509";

  const handleCopyText = (textToCopy) => {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    setCopiedMessage(`Copied: ${textToCopy}`);

    // Clear the message after a few seconds
    setTimeout(() => {
      setCopiedMessage("");
    }, 1000);
  };

  return (
    <div className="midlePosition">
      <h1>Kirim Hadiah</h1>
      <h2 style={{ width: "80%" }}>
        Doa Restu Anda merupakan karunia yang sangat bearti bagi kami. Namun
        jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado
        secara cashless
      </h2>
      {/* <div className="cardBank"> */}
      <div className={!bankAktif ? "flipCard buka" : "flipCard"}>
        <div className="flipCard-inner">
          <div className="flipCard-front">
            <img src={cardBri} alt="kartu bank" className="cardDebit" />
            <div
              className="copyText"
              onClick={() => handleCopyText(textToCopy2)}
            >
              <h3>Copy rekening</h3>
              <img src={copy} alt="copy text" />
              <div className={`notificationC ${copiedMessage && "show"}`}>
                {copiedMessage}
              </div>
            </div>
          </div>
          <div className="flipCard-back">
            <img src={cardBca} alt="kartu bank" className="cardDebit" />
            <div
              className="copyText"
              onClick={() => handleCopyText(textToCopy1)}
            >
              <h3>Copy rekening</h3>
              <img src={copy} alt="copy text" />
              <div className={`notificationC ${copiedMessage && "show"}`}>
                {copiedMessage}
              </div>
            </div>
          </div>
        </div>

        <div className="btnSkew">
          <div className="skewLeft" onClick={() => setBankAktif(true)}>
            <img
              src={bri}
              alt="btn bri"
              className={bankAktif ? "logoCarda aktif" : "logoCarda"}
            />
          </div>
          <div className="skewRight" onClick={() => setBankAktif(false)}>
            <img
              src={bca}
              alt="btn bca"
              className={!bankAktif ? "logoCardb aktif" : "logoCardb"}
            />
          </div>
        </div>
        {/* <div className="cardBankHead">
          <img
            src={bri}
            alt="bri"
            onClick={() => setBankAktif(true)}
            className={!bankAktif && "blackLogo"}
          />
          <img
            src={bca}
            alt="bca"
            onClick={() => setBankAktif(false)}
            className={bankAktif && "blackLogo"}
          />
        </div>
        <hr />
        <div className="cardBankBody">
          <div className={bankAktif ? "bankfade" : "bankfade off"}>
            <h2>166501011564509</h2>
            <h2>Andi Nilawati - (Bank BRI)</h2>
            <div className="copyText">
              <h3>Copy rekening</h3>
              <img
                src={copy}
                alt="copy text"
                onClick={() => handleCopyText(textToCopy2)}
              />
              <div className={`notificationC ${copiedMessage && "show"}`}>
                {copiedMessage}
              </div>
            </div>
          </div>
          <div className={!bankAktif ? "bankfade" : "bankfade off"}>
            <h2>2900411173</h2>
            <h2>Awaluddin - (Bank BCA)</h2>
            <div className="copyText">
              <h3>Copy rekening</h3>
              <img
                src={copy}
                alt="copy text"
                onClick={() => handleCopyText(textToCopy1)}
              />
              <div className={`notificationC ${copiedMessage && "show"}`}>
                {copiedMessage}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
