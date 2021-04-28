import React from "react";

function Jumbotron({ children, imageBG, titleTop, titleBottom }) {
  return (
    <div style={{backgroundImage: imageBG}}className="jumbotron jumbotron-fluid mt-0 mb-0">
    <div className="container-fluid">
      <h1 className="display-4">{ titleTop }</h1>
      <h2 className="display-6">{ titleBottom }</h2>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  </div>

  );
}

export default Jumbotron;
