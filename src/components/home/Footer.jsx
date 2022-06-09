import "../../styles/Footer.css";
import Facebook from "../../assets/logosRedes/fb1.png";
import Instagram from "../../assets/logosRedes/insta2.png";
import Youtube from "../../assets/logosRedes/youtube3.png";

const Footer = () => {
  return (
    <div>
      <div className="boxFooter">
        <div className="tamBloque">
          <a
            href="https://www.facebook.com/TicsBrothers/"
            target="_blanck"
            rel="noreferrer"
          >
            <img src={Facebook} alt="FB" />
          </a>

          <a
            href="https://www.instagram.com/ticsbrothers/"
            target="_blanck"
            rel="noreferrer"
          >
            <img src={Instagram} alt="IG" />
          </a>

          <a
            href="https://www.youtube.com/channel/UCqgWl0JM3FrweIr__qcUDhA"
            target="_blanck"
            rel="noreferrer"
          >
            <img src={Youtube} alt="YT" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
