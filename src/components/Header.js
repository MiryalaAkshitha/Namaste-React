import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus()
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
          <li>online status : {onlineStatus ? "✅":"❌" } </li>
          <li><Link to ="/">Home</Link></li> 
          <li><Link to ="/contact">Contact</Link></li>
          <li><Link to ="/about">About Us</Link></li>
          <li><Link to ="/grocery">Grocery</Link></li>
          <li><Link to ="/cart">Cart</Link></li> 
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
