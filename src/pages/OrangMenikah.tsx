import assalamulaikum from "./../assets/assalamualaikum.png";
import bismillah from "./../assets/bismillah.png";
import PropTypes from "prop-types";
import "./OrangMenikah.css";
export default function OrangMenikah({ transText }) {
  return (
    <div className="midlePosition">
      <img
        src={bismillah}
        alt="alabopa bismillah"
        className={transText ? "img1 show" : "img1"}
      />
      <img
        src={assalamulaikum}
        alt="alabopa salam"
        className={transText ? "img2 show" : "img2"}
      />
      <p className={transText ? "text1 show" : "text1"}>
        Maha Suci Allah Subhanahu Wata’ala <br />
        yang telah menciptakan mahluk-Nya berpasang-pasangan. <br />
        Yaa Allah, semoga Engkau selalu meridhoi Putra-Putri kami :
      </p>
      <h2 className={transText ? "text2 show" : "text2"}>Akan Menikah:</h2>
      <h1
        className={transText ? "nameMarried text3 show" : "nameMarried text3"}
      >
        Awaluddin Hasan, S.T
      </h1>
      <h2 className={transText ? "text4 show" : "text4"}>Dengan</h2>
      <h1
        className={transText ? "nameMarried text5 show" : "nameMarried text5"}
      >
        Andi Nilawati HS, S.T
      </h1>
    </div>
  );
}

OrangMenikah.propTypes = {
  transText: PropTypes.bool,
};
