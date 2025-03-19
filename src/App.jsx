import { useState } from "react";
import Employee from "./components/Employee/employee";
import AddEmployee from "./components/Add Employee/addEmployee";
import EmployeeModal from "./components/Edit Employee/employeeModal";
import Navbar from "./components/Navbar/navbar";
import Employees from "./Pages/employees";


const App = () => {
   
    return (
        <Navbar>
            <Employees />
        </Navbar>
        
    );
}

export default App;