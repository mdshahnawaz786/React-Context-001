import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Global } from "../../App";
import "./header.css";

const Header = ({ first, setfirst }) => {
  const Glob = useContext(Global);
  console.log(Glob.obj.whiteColor);
  return (
    <div
      style={first ? Glob.obj.blackColor : Glob.obj.whiteColor}
      className="header"
    >
      <div className="left">
        <img src="https://www.geekster.in/images/logo.svg" alt="" />
      </div>
      <div className="right">
        <ul className="ul">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/service">
            <li>Service</li>
          </Link>
          
        </ul>
        <button
          onClick={() => {
            setfirst(!first);
          }}
        >
         
          {first ? "Toggle to Light Theme" : "Toggle to Dark Theme"}
        </button>
      </div>
    </div>
  );
};

export default Header;