import { useState } from "react";
import Employee from "./components/Employee/employee";
import {v4 as uuidv4} from 'uuid';

const App = () => {
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
    return (
        <div className="flex flex-wrap justify-center gap-6 m-4">
            {employees.map(employee => {
                return (
                    <Employee 
                        key={employee.id}
                        id={employee.id}
                        name={employee.name}
                        role={employee.role}
                        img={employee.img}
                        updateEmployee={updateEmployee}
                    />
                );
             })}
        </div>

    );
}

export default App;