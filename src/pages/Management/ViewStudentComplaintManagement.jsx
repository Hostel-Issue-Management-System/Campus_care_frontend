import React, { Component } from 'react'
import StudentComplaintService from '../../services/StudentComplaintService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ViewStudentComplaintManagement.css';
import UpdateStudentComplaint from '../Student/UpdateStudentComplaint';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import { Link } from 'react-router-dom';

function ViewStudentComplaintManagement() {
  // define the URL for the API endpoint
  const [complaintRecords, setComplaintRecords] = useState([]);
  const [complaintId, setComplaintId] = useState();
  const url = 'http://localhost:9101/complaintRecord/getComplaintRecordByStudentId/';

  // define the student ID you want to fetch data for
  const [rollNumber, setRollNumber] = useState(JSON.parse(localStorage.getItem("user")).rollNumber);


  useEffect(() => {
    StudentComplaintService
      .getAllStudentComplaint()
      .then(response => {
        console.log(response.data);
        setComplaintRecords(response.data);
      })
      .catch(error => console.error(error));
  }, [rollNumber]);

  const resolveComplaintRecord = (id) => async () => {
    StudentComplaintService
      .resolveStudentComplaintById(id)
      .then(response => {
        console.log(response.data);
        toast.success("Complaint Resolved")
        window.location.reload();

      })
      .catch(error => console.error(error));
  }

  return (

    <div>
      <Link to="/">
        <button className='lg'>Logout</button>
      </Link>
      <div className="dashboard-container">

        <h1>Complaint Records Dashboard</h1>
        <div className="requests-container">
          {complaintRecords.map(request => (
            <div key={request.id} className="request-card">
              <h3>Complaint Id: {request.complaintId}</h3>
              <p>Complaint Type: {request.complaintType}</p>
              <p>Room Number: {request.roomNumber}</p>
              <p>Description: {request.description}</p>
              <p>Status: {request.status}</p>
              <p>Roll No.: {request.rollNumber}</p>
              {request.resolved ? (
                <p className="resolved" >Resolved</p>
              ) : (
                <button onClick={resolveComplaintRecord(request.complaintId)}>Resolve</button>
              )}
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ViewStudentComplaintManagement;