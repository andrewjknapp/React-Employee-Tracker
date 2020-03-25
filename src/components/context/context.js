import { createContext } from "react";

const EmployeeContext = createContext({
    store: {},
    dispatch: () => console.log("CREATE DISPATCH CALL")
})

export default EmployeeContext;