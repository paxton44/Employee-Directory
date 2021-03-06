import React from "react";
import EmployeeList from "./EmployeeList";


function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h1>{props.heading}Employee Directory</h1>
        <form>
        
        <input type="text" onChange={props.handleNameSearch} />
        <button>Search By First Name</button>
          </form>
        


  
      </div>
      <div className="card-body">
       
      <EmployeeList users={props.users} />
      
     
      </div>
    </div>
    
  );
}

export default Card;
