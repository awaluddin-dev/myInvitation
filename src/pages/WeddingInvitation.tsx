import { useState } from "react";
import { useParams } from "react-router-dom";
import { decryptString } from "../module/CryptoName";
import Wrapper from "../module/Wrapper";
import OrangMenikah from "./OrangMenikah";
import Schedule1 from "./Schedule1";
import TurutMengundang1 from "./TurutMengundang1";
import Schedule2 from "./Schedule2";
import TurutMengundang2 from "./TurutMengundang2";
import Transfer from "./Transfer";
import Lokasi1 from "./Lokasi1";
import Lokasi2 from "./Lokasi2";
import Comment from "./Comment";
import LoveUs from "./LoveUs";
import "./WeddingInvitation.css";

export default function WeddingInvitation() {
  const { name } = useParams();
  const [onText1, setonText1] = useState(false);
  const [sSudut, setsSudut] = useState(false);
  const [onB, setOnb] = useState(false);
  const [onW, setOnw] = useState(false);
  const [onO, setOnO] = useState(false);
  const [onT, setOnt] = useState(false);
  const [onG, setOng] = useState(false);
  const [onK, setOnk] = useState(false);
  const [onL, setOnL] = useState(false);
  const [onPerempuan, setOnperempuan] = useState(true);
  const [onPria, setOnpria] = useState(false);
  return (
    <Wrapper
      name={decryptString(name)}
      transText1={setonText1}
      sSudut={sSudut}
      setsSudut={setsSudut}
      onB={onB}
      setOnb={setOnb}
      onW={onW}
      setOnw={setOnw}
      onT={onT}
      setOnt={setOnt}
      onG={onG}
      setOng={setOng}
      onK={onK}
      setOnk={setOnk}
      onL={onL}
      setOnL={setOnL}
      onPerempuan={onPerempuan}
      setOnperempuan={setOnperempuan}
      onPria={onPria}
      setOnpria={setOnpria}
      setOnO={setOnO}
    >
      <div className="pages">
        <div className={onB ? "page1 show" : "page1"}>
          <OrangMenikah transText={onText1} />
        </div>
        <div className={onW && onPerempuan && !onO ? "page1 show" : "page1"}>
          <Schedule1 setOnO={setOnO} />
        </div>
        <div className={onW && onPerempuan && onO ? "page1 show" : "page1"}>
          <TurutMengundang1 />
        </div>
        <div className={onW && onPria && !onO ? "page1 show" : "page1"}>
          <Schedule2 setOnO={setOnO} />
        </div>
        <div className={onW && onO && onPria ? "page1 show" : "page1"}>
          <TurutMengundang2 />
        </div>
        <div className={onT && onPerempuan ? "page1 show" : "page1"}>
          <Lokasi1 />
        </div>
        <div className={onT && onPria ? "page1 show" : "page1"}>
          <Lokasi2 />
        </div>
        <div className={onG ? "page1 show" : "page1"}>
          <Transfer />
        </div>
        <div className={onL ? "page1 show" : "page1"}>
          <LoveUs />
        </div>
        <div className={onK ? "page2 show" : "page2"}>
          <Comment />
        </div>
      </div>
    </Wrapper>
  );
}
