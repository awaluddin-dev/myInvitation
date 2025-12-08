import { useState, useEffect } from "react";
import { encryptString } from "../module/CryptoName";
import { capitalizeEveryWord } from "../module/Capital";
import "./EncryptName.css";
export default function EncryptName() {
  const [namaUndangan, setNamaUndangan] = useState("");
  const [linkCreated, setLinkCreate] = useState(false);
  const [fullChat, setFullChat] = useState("");
  const [copiedMessage, setCopiedMessage] = useState("");
  const [urlLink, setUrlLink] = useState("");
  const makeUndangan = () => {
    const buat = encryptString(namaUndangan);
    const Link = "https://alabopa.com/weddinginvitation/";
    const fullLink = `${Link}${buat}`;
    setUrlLink(fullLink);
    setLinkCreate(true);
  };

  useEffect(() => {
    const fullPesan = `
_Bismillahirrahmanirrahim_\n_Assalamualaikum Warahmatullahi Wabarakatuh_\n\nTanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i\n\n*${capitalizeEveryWord(
      namaUndangan
    )}* \n\nuntuk menghadiri acara kami.\n\n*Berikut link undangan kami*, untuk info lengkap dari acara bisa kunjungi :\n\n${urlLink}\n\nMerupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.\n\nMohon maaf perihal undangan hanya di bagikan melalui pesan ini.\n\nTerima kasih banyak atas perhatiannya.\n\n_Wassalamualaikum Warahmatullahi Wabarakatuh_
    `;
    setFullChat(fullPesan);
  }, [urlLink]);

  const handleCopyText = (textToCopy) => {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    setCopiedMessage(`Copied: ${textToCopy}`);
    setLinkCreate(false);
    // Clear the message after a few seconds
    setTimeout(() => {
      setCopiedMessage("");
    }, 1000);
  };
  return (
    <div className="encryptWrapper">
      <h5>Masukkan Nama Undangan</h5>
      <div className="namaInput">
        <input type="text" onChange={(e) => setNamaUndangan(e.target.value)} />
        <div className="btnNamaUndangan" onClick={makeUndangan}>
          Buat Undangan
        </div>
      </div>
      <div
        className={linkCreated ? "mylink show" : "mylink"}
        onClick={() => handleCopyText(fullChat)}
      >
        <h5>{urlLink}</h5>
      </div>
      <div className={`notificationC ${copiedMessage && "show"}`}>
        {copiedMessage}
      </div>
    </div>
  );
}
