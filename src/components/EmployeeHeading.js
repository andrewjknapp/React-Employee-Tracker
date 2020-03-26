import React, { useContext } from "react";
import EmployeeContext from "./context/context";
import { SORT_EMPLOYEES } from "../actions";


function EmployeeHeading() {

    const { dispatch } = useContext(EmployeeContext);

    return (
        <ul>
            <li>Image</li>
            <li onClick={()=>dispatch({type: SORT_EMPLOYEES, payload:"name"})}>Name</li>
            <li onClick={()=>dispatch({type: SORT_EMPLOYEES, payload:"phone"})}>Phone</li>
            <li onClick={()=>dispatch({type: SORT_EMPLOYEES, payload:"email"})}>Email</li>
            <li onClick={()=>dispatch({type: SORT_EMPLOYEES, payload:"dob"})}>DOB</li>
        </ul>
    )
}

export default EmployeeHeading;