import React from 'react';
import EmployeeModal from '../employeeModal';

const Employee = (props) => {
  return (
    <div className="flex flex-col justify-center gap-4 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 shadow-lg rounded-xl w-[20rem]">
        <img className=" object-cover h-[100px] w-[100px]  mx-auto block rounded-full sm:mx-0 sm:shrink-0" src={props.img} />
        <div className="space-y-2 text-center sm:text-left">
            <div className="space-y-0.5">
                <p className="text-lg font-semibold text-black"> { props.name}</p>
                <p className="font-medium text-gray-500">{props.role}</p>
            </div>
            <EmployeeModal />
        </div>
    </div>
  )
}

export default Employee;