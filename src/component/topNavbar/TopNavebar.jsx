import React from "react";
import { useHistory } from "react-router-dom";
import "./topNavbar.css";
export default function Navbar(props) {
  const history = useHistory();
  return (
    <div className="navBar">
      <div
        onClick={() => history.push("/video")}
        style={{ fontSize: 24, marginRight: 40 }}
      >
        VIDEO GAMES
      </div>

      <div
        onClick={() => history.push("/contact")}
        style={{ fontSize: 24, display: "block" }}
      >
        CONTACT
      </div>
    </div>
  );
}
