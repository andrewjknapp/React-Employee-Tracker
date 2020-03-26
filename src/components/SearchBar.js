import React, { useState, useContext } from "react";
import EmployeeContext from "./context/context";
import { SEARCH_EMPLOYEES } from "../actions";

function SearchBar() {
    const [ search, setSearch ] = useState('');
    const { dispatch } = useContext(EmployeeContext);

    return (
        <React.Fragment>
            <input
                type="text"
                value={search}
                onChange={event=>setSearch(event.target.value)}
            />
            <button
                onClick={()=>dispatch({
                    type: SEARCH_EMPLOYEES,
                    payload: search
                })}
            >
                Search
            </button>
        </React.Fragment>
    )
}

export default SearchBar;