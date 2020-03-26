import { createContext } from "react";

const EmployeeContext = createContext({
    store: {},
    dispatch: () => console.log("MUST IMPLEMENT CONTEXT")
})

export default EmployeeContext;