
import './App.css';
import CreateStudentComplaint from './components/Student/CreateStudentComplaint';
import ViewStudentComplaint from './components/Student/ViewStudentComplaint';
import UpdateStudentComplaint from './components/Student/UpdateStudentComplaint';
import ViewStudentComplaintManagement from './components/Management/ViewStudentComplaintManagement';
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home/Home';
import Admin from './pages/Adminpages/Admin';
import ComplaintPage from './pages/Complaintstudent/ComplaintPage';
import React, { Component }  from 'react';




function App() {  return(
  <div className="flex flex-col overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/createStudentComplaint" element={<CreateStudentComplaint />} />
        <Route path="/viewStudentComplaint" element={<ViewStudentComplaint />} />
        <Route path="/viewStudentComplaintManagement" element={<ViewStudentComplaintManagement />} />
        <Route path="/updateStudentComplaint" element={<UpdateStudentComplaint />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/home/history" element={<ComplaintPage/>} />

       
      </Routes>
    </div>
   
   
   
    );
}

export default App;
