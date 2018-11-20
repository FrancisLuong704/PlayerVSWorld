import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 600, clear: "both", paddingTop: 20}}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
