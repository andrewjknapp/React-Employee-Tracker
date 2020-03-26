import React, { useContext } from "react";
import EmployeeContext from "./context/context";
import { SORT_EMPLOYEES } from "../actions";
import "./assets/css/list.css";
import "./assets/css/EmployeeHeading.css";


function EmployeeHeading() {

    const { dispatch } = useContext(EmployeeContext);

    return (
        <ul class="empHeader">
            <li id="image-header">Image</li>
            <li onClick={()=>dispatch({type: SORT_EMPLOYEES, payload:"name"})}>Name</li>
            <li onClick={()=>dispatch({type: SORT_EMPLOYEES, payload:"phone"})}>Phone</li>
            <li onClick={()=>dispatch({type: SORT_EMPLOYEES, payload:"email"})}>Email</li>
            <li onClick={()=>dispatch({type: SORT_EMPLOYEES, payload:"dob"})}>DOB</li>
        </ul>
    )
}

export default EmployeeHeading;