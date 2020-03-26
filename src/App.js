import React, { useReducer, useEffect } from 'react';
import EmployeeContext from "./components/context/context";
import { SET_EMPLOYEES, GET_EMPLOYEES } from './actions';
import Axios from 'axios';

const reducer = ( state, action ) => {

  if(action.type === SET_EMPLOYEES) {
    return {
      Employees: action.payload
    }
  }


  return state;
}


function App() {

  const state = {
    Employees: []
  }

  const [ store, dispatch ] = useReducer(reducer, state);

  useEffect(()=>{
    Axios.get("https://randomuser.me/api/?results=30&nat=us")
    .then(({ data }) => {

      dispatch({
        type: SET_EMPLOYEES,
        payload: data
      })
    })
  },[])

  return (
    <React.Fragment>
      <h1>Hello There</h1>
      <EmployeeContext.Provider value={{store, dispatch}}>

      </EmployeeContext.Provider>
    </React.Fragment>
  );
}

export default App;