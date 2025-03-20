import Navbar from "./components/Navbar/navbar";
import Employees from "./Pages/employees";
import Customers from "./Pages/customers";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {
   
    return (
        <BrowserRouter>
            <Navbar>
                <Routes>
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/customers" element={<Customers />} />
                </Routes>
            </Navbar>
        </BrowserRouter>
        
    );
}

export default App;