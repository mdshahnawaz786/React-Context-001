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
        <h1>Geekster</h1>
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
        <div className="button-div"> 
        <button
          onClick={() => {
            setfirst(!first);
          }}
        >
          {first ? "Toggle to Light Theme" : "Toggle to Dark Theme"}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Header;