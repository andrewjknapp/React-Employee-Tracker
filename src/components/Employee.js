import React from "react";

function Employee(props) {
    let employee = props.Employee
    return (
        <React.Fragment>
            <ul>
                <li><img src={employee.picture.thumbnail} alt="Employee Face"/></li>
                <li>{employee.name.first} {employee.name.last}</li>
                <li>{employee.phone}</li>
                <li>{employee.email}</li>
                <li>{employee.dob.date}</li>
            </ul>
            
        </React.Fragment>
    )
}

export default Employee;