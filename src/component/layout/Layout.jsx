import React from "react";
import "./layout.css";
import TopNavbar from "../topNavbar/TopNavebar";
import { Route } from "react-router-dom";
import Contact from "../contact/Contact";
import { Video } from "../video/Video";

const Layout = (props) => {
  return (
    <div className="main_layout_container">
      <TopNavbar />

      <Route path={"/contact"} component={Contact}></Route>
      <Route path={"/video"} component={Video}></Route>
    </div>
  );
};

export default Layout;
