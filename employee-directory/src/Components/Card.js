//Employee Profile Card
import React from "react";
import EmployeeList from "./EmployeeList";
// import EmployeeProfile from "./EmployeeProfile";

function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h1>{props.heading}Employee Directory
        
        
        </h1>
        


  
      </div>
      <div className="card-body">
       
      <EmployeeList />
      
     
      </div>
    </div>
    
  );
}

export default Card;
