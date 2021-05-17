import React from "react";


function Container(props) {
    //cool ternary operator from activity 20 
  return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Container;