import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { v4 as uuidv4 } from "uuid";

function AddEmployee(props) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [img, setImg] = useState('');
  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
            <button 
                className=" mx-auto mb-[1rem] flex justify-center items-center border-2 border-purple-500 px-[1rem] py-[0.5rem] text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 duration-400 ease-in-out"
                id='addEmployee'
                onClick={handleShow}
            >
                + Add Employee
            </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={(e) => {
          e.preventDefault();
          setName("");
          setRole("");
          setImg("");
          props.newEmployee({
            id: uuidv4(), 
            name: name,
            role: role,
            img: img,
          })
        }}
        className="w-full max-w-sm" id='UpdateEmployee'>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="name" 
                type="text" 
                placeholder='John Doe'
                value={name}
                onChange={ (e) => {
                  setName(e.target.value)
                }} 
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="role">
                Role
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="role" 
                type="text" 
                placeholder='Accountant'
                value={role}
                onChange={ (e) => {
                  setRole(e.target.value)
                }}
                
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="role">
                Image URL
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="img" 
                type="text" 
                placeholder='https://www.pexels.com/photo/profile-image'
                value={img}
                onChange={ (e) => {
                  setImg(e.target.value)
                }}
                
              />
            </div>
          </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="bg-neutral-500 hover:bg-neutral-700 duration-400 ease-in-out text-white font-bold py-2 px-4 border border-neutral-700 rounded" 
            onClick={handleClose} 
          >
            Close
          </button>
          <button className="bg-purple-500 hover:bg-purple-700 duration-400 ease-in-out text-white font-bold py-2 px-4 border border-purple-700 rounded" 
            form='UpdateEmployee' 
            onClick={handleClose} 
            >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;