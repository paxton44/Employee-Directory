import React from "react";


function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}TestRow</div>;
}

export default Row;
