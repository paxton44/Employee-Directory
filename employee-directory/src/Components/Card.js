//Employee Profile Card
import React from "react";


function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h1>{props.heading}Test</h1>
        


  
      </div>
      <div className="card-body">
        {/* {props.children} */}
      
      
     
      </div>
    </div>
    
  );
}

export default Card;
