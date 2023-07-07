import { FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from '../../assets/Images/PureBeaty-logo.png'

import "./Footer..scss";

const Footer = () => {
  return (
    <>
      <div className="app__footer-container">
        <div className="app__footer-top">
          <div className="app__footer-left">
            <img src={logo} alt="Pure Beauty logo" />
          </div>
          <div className="app__footer-right">
            <div className="app__footer-address">
              <h5 className="primFont">ADDRESS</h5>
              <span className="footerText primFont">
                13 Brinkley Circuit Palmerston
              </span>
            </div>
            <div className="app__footer-socialMedia">
              <h5 className="primFont">SOCIAL MEDIA</h5>
              <span className="primFont">
                <FaInstagram />
                <FaFacebookF />
              </span>
            </div>
          </div>
        </div>
        <div className="app__footer-bottom">
          <div className="leftFooter">
            <span className="copyRightText primFont">
              2022 PURE BEAUTY, POWERED BY{" "}
            </span>
            <span className="primFont">planetmedia</span>
          </div>
          <div className="rightFooter">
            <span className="copyRightText primFont">ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
