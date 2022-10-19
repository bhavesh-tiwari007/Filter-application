import logo from "./logo.svg";
import TopNavbar from "./component/topNavbar/TopNavebar";
import { Route } from "react-router-dom";
import Contact from "./component/contact/Contact";
import { Video } from "./component/video/Video";
import Layout from "./component/layout/Layout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <>
        <Route path={"/"} component={Layout}></Route>
        {/* <Route path={"/contact"} component={Contact}></Route>
        <Route path={"/video"} component={Video}></Route> */}
      </>
    </div>
  );
}

export default App;
