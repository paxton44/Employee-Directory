import React from 'react';




function EmployeeProfile(props) {
    //cool ternary operator from activity 20
 return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children} TestEmployeeProfile

   
</div>;
}

export default EmployeeProfile;