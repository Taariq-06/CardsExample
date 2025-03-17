import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EmployeeModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
            <button 
                className="border-2 border-purple-200 px-[0.5rem] py-[0.25rem] w-[6rem] text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 duration-400 ease-in-out"
                onClick={handleShow}
            >
                Update
            </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="w-full max-w-sm" id='UpdateEmployee'>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" value="Jane Doe" />
            </div>
          </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <button class="bg-neutral-500 hover:bg-neutral-700 duration-400 ease-in-out text-white font-bold py-2 px-4 border border-neutral-700 rounded" >
            Close
          </button>
          <button class="bg-purple-500 hover:bg-purple-700 duration-400 ease-in-out text-white font-bold py-2 px-4 border border-purple-700 rounded" 
            id='UpdateEmployee' 
            onChange={handleClose} 
            >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EmployeeModal;