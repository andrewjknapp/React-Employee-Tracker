import React, { useState, useContext } from "react";
import EmployeeContext from "./context/context";
import { SEARCH_EMPLOYEES, RESET_SEARCH } from "../actions";
import "./assets/css/SearchBar.css"

function SearchBar() {
    const [ search, setSearch ] = useState('');
    const { store, dispatch } = useContext(EmployeeContext);

    return (
        <article>
            <input
                type="text"
                value={search}
                onChange={event=>setSearch(event.target.value)}
                placeholder="Search Employee"
            />
            <button
                onClick={()=>dispatch({
                    type: SEARCH_EMPLOYEES,
                    payload: search
                })}
            >
                Search
            </button>
            {store.Employees.length > store.FilteredEmployees.length ? <button className="resetSearch" onClick={()=>dispatch({type: RESET_SEARCH})}>Reset Search</button> : null}
        </article>
    )
}

export default SearchBar;