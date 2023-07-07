import { Link, useNavigate } from "react-router-dom";
import { SlHandbag } from "react-icons/sl";
import { AiOutlineLogout } from "react-icons/ai";
import logo from "../../assets/Images/PureBeaty-logo2.png";

import "./Navbar.scss";

const Navbar = () => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        localStorage.removeItem('pureBeautyToken');
        navigate('/login')
    }
  return (
    <>
      <div className="app__navbar-container">
        <div>
          <Link to={"/shop"} className="link">
            <span className="app__navbar-icon">
              <SlHandbag />
              Shop
            </span>
          </Link>
        </div>
        <div className="">
          <Link to={"/"} className="link">
            <img src={logo} alt="Pure Beauty Skin Care logo" />
          </Link>
        </div>
        <div>
          <span className="app__navbar-logout" onClick={handleClick}>
            Logout
            <AiOutlineLogout />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
