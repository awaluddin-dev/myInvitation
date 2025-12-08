import styles from "./../../css/module/Yudha.module.css";
import copy from "./../../assets/copy.svg";
import bankBtn from "./../../assets/cardYudha.png";
import { useState } from "react";
import "./../ardi/AmplopArdi.css";
import useIntersectionObserver from "../../module/IntersectionObserver";
export default function WeddingGift() {
  const [copiedMessage, setCopiedMessage] = useState("");
  const rek1 = "7801580003056";
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
    <section className={styles.mempelaiSection} ref={sectionRef}>
      <div className={styles.mempelaiImage}>
        <div
          className={styles.introOverlayW}
          style={{
            transition: "all 1s linear",
            gap: "0px",
            opacity: isVisible ? "1" : "0",
            visibility: isVisible ? "visible" : "hidden",
            transform: isVisible ? "translateY(0px)" : "translateY(100%)",
          }}
        >
          <div className={styles.tagIntro}>
            <h2 className={styles.initialNameEvent}>Wedding Gift</h2>
          </div>
          <p className={styles.mempelaiDesc} style={{ textAlign: "center" }}>
            Bagi bapak/ibu/saudara/i yang ingin mengirimkan hadiah pernikahan
            dapat melalui virtual account atau e-wallet di bawah ini:
          </p>
          <div className={"cardardiBank active"}>
            <img src={bankBtn} alt="rek indri" className={"rekIndricard"} />
            <div className="copyTextArdi" onClick={() => handleCopyText(rek1)}>
              <h3>Copy</h3>
              <img src={copy} alt="copy text" style={{ width: "20%" }} />
              <div className={`notificationArdi ${copiedMessage && "show"}`}>
                {copiedMessage}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
