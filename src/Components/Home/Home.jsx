import React, { useContext } from "react";
import { Global } from "../../App";
import "./home.css";

const Home = ({ first }) => {
  const Glob = useContext(Global);
  const data = Glob.obj.home;

  return (
    <div
      style={first ? Glob.obj.blackColor : Glob.obj.whiteColor}
      className="home"
    >
      <h3 style={{ textAlign: "center" }}>{data.data}</h3>
    </div>
  );
};

export default Home;
