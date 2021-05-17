import React from 'react';




function EmployeeList(props) {
    //cool ternary operator from activity 20
 return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children} TestEmployeeLIST

   
</div>;
}

export default EmployeeList;