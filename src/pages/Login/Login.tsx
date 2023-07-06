import { Link } from "react-router-dom";
import LogBg from "../../assets/Images/LoginImg-bg.png";
import LogLogo from "../../assets/Images/PureBeaty-logo.png";

import "./Login.scss";
import { TextField } from "@mui/material";

const Login = () => {
  return (
    <div>
      <div className="app__login-container">
        <div className="app__login-left">
          <div className="app__login-icon">
            <img src={LogLogo} alt="Pure beauty logo." />
          </div>
          <div className="app__login-main">
            <div className="app__login-form">
              <h1>Login</h1>
              <TextField
                sx={{
                  input: {
                    accentColor: "red",
                    color: "white",
                  },
                  fieldset: { borderColor: "red" },
                }}
                id="username"
                className="app__login__form-input"
                label="Username"
                variant="standard"
              />
            </div>
            <div className="app__login-form">
              <TextField
                sx={{
                  input: {
                    accentColor: "red",
                    color: "white",
                  },
                  fieldset: { borderColor: "red" },
                }}
                id="password"
                className="app__login__form-input"
                label="Password"
                variant="standard"
              />
            </div>
            <div className="app__login-form">
              <button className="app__login-form-button">LOGIN</button>
            </div>
            <div className="app__login-form">
              <div className="app__login-textButton">
                <span className="">LOGIN OR</span>
                <Link to={"/shop"} className="link">
                  <span className="app__login-shopButton ">&nbsp; SHOP</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="app__login-right">
          <div className="app__login-bgImg">
            <img src={LogBg} alt="Background image." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
