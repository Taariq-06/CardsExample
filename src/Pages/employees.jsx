import { useState } from "react";
import Employee from "../components/Employee/employee";
import AddEmployee from "../components/Add Employee/addEmployee";
import EmployeeModal from "../components/Edit Employee/employeeModal";
import Navbar from "../components/Navbar/navbar";


const Employees = () => {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: 'Taariq',
            role: 'CEO',
            img: '/pexels-slytonic-31155905.jpg',
        },
        {
            id: 2,
            name: 'Shuaib',
            role: 'Attorney',
            img: '/pexels-pavel-danilyuk-7519011.jpg',
        },
        {
            id: 3,
            name: 'Avisha',
            role: 'Indian',
            img: '/pexels-manjeet-singh-yadav-462762-1162983.jpg',
        },
        {
            id: 4,
            name: 'Ibraheem',
            role: 'Haafith',
            img: '/pexels-a-darmel-8164602.jpg',
        },
        {
            id: 5,
            name: 'Haajr',
            role: 'Princess',
            img: '/pexels-mochi-mochi-613800453-27589788.jpg',
        },
        {
            id: 6,
            name: 'Ayyub',
            role: 'Head of department',
            img: '/pexels-framesbyambro-15531446.jpg',
        }
    ])

    const updateEmployee = (updatedData) => {
        const updatedEmployees = employees.map(employee => {
            if( employee.id === updatedData.id ) {
                return {...employee, ...updatedData}
            };
            return employee;
        });

        setEmployees(updatedEmployees);
    };

    const newEmployee = (data) => {
        setEmployees([...employees, data])
    }
    return (
        <div className=" bg-sky-200 min-h-screen py-[1rem] px-[0.6rem]">
                        
            <>
                <div className="flex flex-wrap justify-center gap-6 mb-4">
                    {employees.map(employee => {
                        const editEmployee = (
                            <EmployeeModal  
                                id={employee.id} 
                                name={employee.name} 
                                role={employee.role} 
                                updateEmployee={updateEmployee} 
                            />
                         );

                    return (
                        <Employee 
                            key={employee.id}
                            id={employee.id}
                            name={employee.name}
                            role={employee.role}
                            img={employee.img}
                            editEmployee={editEmployee}
                        />
                    );
                    })}
            </div>

            <AddEmployee  newEmployee={newEmployee}/> 
            </>
        </div>

        
    );
}

export default Employees;