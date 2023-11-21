import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const handleClick = () => {
    setLogin(false);
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>About Us</li>
          <li>Cart</li>
          <button
            onClick={() => {
                btnName==="login"?
              setBtnName("logout"):
              setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
