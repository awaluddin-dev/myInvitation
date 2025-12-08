import "./AmplopArdi.css";
import gift from "./../../assets/gift.svg";
import copy from "./../../assets/copy.svg";
import rekIndri from "./../../assets/rekIndri.png";
import { useState } from "react";
import useIntersectionObserver from "../../module/IntersectionObserver";

export default function AmplopArdi() {
  const [openAmplop, setOpenAmplop] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState("");
  const rek1 = "382301019401535";
  const [sectionRef, isVisible] = useIntersectionObserver();

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
    <div className="sectionHomeArdi">
      <div className="secPositionHome">
        <div
          className={
            isVisible ? "secAbsolute fadeIn visible" : "secAbsolute fadeIn"
          }
        >
          <h3 className="titleAmplop" ref={sectionRef}>
            Amplop Digital
          </h3>
          <p>
            Doa Restu Anda merupakan
            <br />
            karunia yang sangat berarti bagi kami.
            <br />
            <br />
            Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat
            memberi kado secara cashless.
          </p>
          <div>
            <a
              href="#"
              rel="noreferrer"
              className="btnArdiMap"
              style={{
                marginTop: "3rem",
                fontSize: "1.2rem",
                fontWeight: "600",
              }}
              onClick={(e) => {
                e.preventDefault();
                setOpenAmplop(true);
              }}
            >
              <img
                src={gift}
                alt="gift"
                style={{
                  filter: "invert(1)",
                  width: "8%",
                  marginRight: "0.7rem",
                }}
              />
              Kirim Hadiah
            </a>
          </div>
          <div className={openAmplop ? "cardardiBank active" : "cardardiBank"}>
            <img src={rekIndri} alt="rek indri" className={"rekIndricard"} />
            <div className="copyTextArdi" onClick={() => handleCopyText(rek1)}>
              <h3>Copy</h3>
              <img src={copy} alt="copy text" style={{ width: "20%" }} />
              <div className={`notificationArdi ${copiedMessage && "show"}`}>
                {copiedMessage}
              </div>
            </div>
          </div>
          <div className="doaAmplop">
            <p>
              “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
              antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian
              itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum
              yang berpikir.”
            </p>
            <p style={{ marginTop: "20px" }}>(Qs. Ar-Rum : 21)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
