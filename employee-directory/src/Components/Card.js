import React from "react";

function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{props.heading}TestCard</h2>
      </div>
      <div className="card-body">{props.children}
      TestCardBody
      <ul>
          
      </ul>
      </div>
    </div>
    
  );
}

export default Card;
