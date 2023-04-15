
import './App.css';
import ComplaintForm from './ComplaintForm';
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home/Home';
import Admin from './pages/Adminpages/Admin';
import ComplaintPage from './pages/Complaintstudent/ComplaintPage';



function App() {  return(
  <div className="flex flex-col overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<ComplaintForm />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/home/history" element={<ComplaintPage/>} />


       
      </Routes>
    </div>
   
   
   
    );
}

export default App;
