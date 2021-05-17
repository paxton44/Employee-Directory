//Employee Profile Card
import React from "react";

function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{props.heading}Employee Profile</h2>
        
      </div>
      <div className="card-body">{props.children}
      <button>Search</button>
     
      </div>
    </div>
    
  );
}

export default Card;
