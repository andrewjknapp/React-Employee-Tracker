import { SET_EMPLOYEES, SEARCH_EMPLOYEES, SORT_EMPLOYEES } from "../../actions";

const reducer = ( state, action ) => {

    if(action.type === SET_EMPLOYEES) {
      return {
        ...state,
        Employees: action.payload,
        FilteredEmployees: action.payload
      }
    }
  
    if(action.type === SEARCH_EMPLOYEES) {
      return {
        ...state,
        FilteredEmployees: state.Employees.filter(employee => {
          let fullName = `${employee.name.title} ${employee.name.first} ${employee.name.last}`
          return fullName.includes(action.payload);
        })
      }
    }
  
    if(action.type === SORT_EMPLOYEES) {
      let sorted = [];
  
      if(action.payload === "name") {
        sorted = state.Employees.sort((a,b)=>{
          let nameA = `${a.name.first} ${a.name.last}`.toUpperCase();
          let nameB = `${b.name.first} ${b.name.last}`.toUpperCase();
          if(nameA > nameB) {
            return 1
          } else if (nameA < nameB) {
            return -1
          } else {
            return 0
          }
        })
        return {
          ...state,
          FilteredEmployees: sorted
        }
  
      } else if (action.payload === "phone") {
        sorted = state.Employees.sort((a,b) => {
  
          if(a.phone < b.phone) {
            return 1
          } else if (a.phone > b.phone) {
            return -1
          } else {
            return 0
          }
        })
        return {
          ...state,
          FilteredEmployees: sorted
        }
      } else if (action.payload === "email") {
        sorted = state.Employees.sort((a,b) => {
  
          if(a.email > b.email) {
            return 1
          } else if (a.email < b.email) {
            return -1
          } else {
            return 0
          }
        })
        return {
          ...state,
          FilteredEmployees: sorted
        }
      } else if (action.payload === 'dob') {
        sorted = state.Employees.sort((a,b) => {
  
          if(a.dob.date > b.dob.date) {
            return 1
          } else if (a.dob.date < b.dob.date) {
            return -1
          } else {
            return 0
          }
        })
        return {
          ...state,
          FilteredEmployees: sorted
        }
      }
    } 
  
  
    return state;
  }

  export default reducer;