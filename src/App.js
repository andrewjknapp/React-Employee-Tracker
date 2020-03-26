import React, { useReducer, useEffect } from 'react';
import EmployeeContext from "./components/context/context";
import { SET_EMPLOYEES } from './actions';
import Axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Employee from './components/Employee';
import EmployeeHeading from './components/EmployeeHeading';
import reducer from './components/reducer/reducer';

function App() {

  const state = {
    Employees: [],
    FilteredEmployees: []
  }

  const [ store, dispatch ] = useReducer(reducer, state);

  useEffect(()=>{
    Axios.get("https://randomuser.me/api/?results=30&nat=us")
    .then((response) => {
      const data = response.data.results
      dispatch({
        type: SET_EMPLOYEES,
        payload: data
      })
    })
  },[])

  console.log(store);

  return (
    <React.Fragment>
      <EmployeeContext.Provider value={{store, dispatch}}>
        <Header/>
        <SearchBar/>
        <EmployeeHeading/>
        {store.FilteredEmployees.map(employee => <Employee key={employee.id.value} Employee={employee}/>)}
      </EmployeeContext.Provider>
    </React.Fragment>
  );
}

export default App;