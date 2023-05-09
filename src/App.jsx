
import './App.css';
import CreateStudentComplaint from './pages/Student/CreateStudentComplaint';
import ViewStudentComplaint from './pages/Student/ViewStudentComplaint';
import UpdateStudentComplaint from './pages/Student/UpdateStudentComplaint';
import ViewStudentComplaintManagement from './pages/Management/ViewStudentComplaintManagement';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home/Home';
import React, { Component }  from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';




function App() {  return(
  <div className="flex flex-col overflow-hidden">


      <Routes>
        <Route path="/createStudentComplaint" element={<CreateStudentComplaint />} />
        <Route path="/viewStudentComplaint" element={<ViewStudentComplaint />} />
        <Route path="/viewStudentComplaintManagement" element={<ViewStudentComplaintManagement />} />
        <Route path="/updateStudentComplaint" element={<UpdateStudentComplaint />} />
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
   
   
   
    );
}

export default App;
