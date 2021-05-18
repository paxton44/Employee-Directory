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
                {props.users.map((user) => (
                    
                        <tbody key={user.cell}>
                        <tr>
                            <td>
                                <img 
                                src={props.thumbnail}
                                alt={"thumbNailImage"}
                                />
                            </td>
                            <td>
                               {props.first}
                            </td>
                            <td>
                               {props.last}
                            </td>
                        </tr>
                        </tbody>

                    
                
         
                ))}
             
            </table>
        </>
    );
    
}

export default EmployeeList;