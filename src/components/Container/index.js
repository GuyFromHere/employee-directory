import React from "react";
import "./style.css";

function Container(props) {
	console.log(props);

  return (
    <div className="container" >
      {props.children}
    </div>
  );
}

export default Container;
