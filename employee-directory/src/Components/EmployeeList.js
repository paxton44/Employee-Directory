import React from 'react';



function EmployeeList(props) {
    return (
        <>
            <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>Picture </th>
                        <th> First Name </th>
                        <th>Last Name </th>
                        <th>Email </th>
                        <th>Cell Phone </th>
                    </tr>
                </thead>
             
            </table>
        </>
    );
    
}

export default EmployeeList;