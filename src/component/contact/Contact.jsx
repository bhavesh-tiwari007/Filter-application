import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="getInTouch">
      <h1>GET IN TOUCH</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a est
        risus. Aliquam ultricies ornare mi className egestas. Vestibulum
        imperdiet interdum est
      </p>
      <div className="getInTouchForm">
        <div style={{ display: "flex" }}>
          <div className="formFieldStyle">
            <label for="fname">Name:</label>
            <input type="text" className="fname" name="fname"></input>
            <br></br>
          </div>
          <div></div>
          <div className="formFieldStyle">
            <label for="lname">Email Address:</label>
            <input type="text" className="lname" name="lname"></input>
            <br></br>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="formFieldStyle">
            <label for="lname">Message:</label>
            <textarea name="message" rows="4"></textarea>
          </div>
        </div>

        <div
          style={{ display: "flex", justifyContent: "right", marginTop: 20 }}
        >
          <button
            type="button"
            style={{
              backgroundColor: " #5792e8",
              padding: "8px 16px",
              color: "white",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
