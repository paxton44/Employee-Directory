import React from "react";
import EmployeeDirectoryContainer from "./EmployeeDirectoryContainer";
import EmployeeList from "./EmployeeList";



function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}<EmployeeList /></div>;
}

export default Row;
