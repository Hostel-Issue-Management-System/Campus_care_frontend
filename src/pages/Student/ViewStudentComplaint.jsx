import React, { Component } from 'react'
import StudentComplaintService from '../../services/StudentComplaintService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './ViewStudentComplaint.css';
import UpdateStudentComplaint from './UpdateStudentComplaint';
import Navbar from "../../components/Navbar/Navbar";

import { Link } from 'react-router-dom';

function ViewStudentComplaint() {
    // define the URL for the API endpoint
    const [complaintRecords, setComplaintRecords] = useState([]);
    const [complaintId, setComplaintId] = useState();
    const [rollNumber, setRollNumber] = useState(JSON.parse(localStorage.getItem("user")).rollNumber);


    useEffect(() => {
        StudentComplaintService
            .getStudentComplaint(rollNumber)
            .then(response => {
                console.log(response.data);
                setComplaintRecords(response.data);
            })
            .catch(error => console.error(error));
    }, [rollNumber]);


    const deleteComplaintRecord = (id) => async () => {
        StudentComplaintService
            .deleteStudentComplaint(id)
            .then(response => {
                console.log(response.data);
                toast.success("Complaint Deleted Successfully!!")
                setComplaintRecords(response.data);
                window.location.reload();
                // alert("Complaint" + id + "Deleted");
            })
            .catch(error => console.error(error));
    }


    return (
        <div>
            <Navbar />
            <h2 className='complaint-title'>Complaint Records of Student {rollNumber}</h2>
            <table>
                <thead >
                    <tr className='thead-txt'>
                        <th>Complaint Id</th>
                        <th>Complaint Type</th>
                        <th>Room Number</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {complaintRecords.map(record => (
                        <tr key={record.complaintId}>
                            <td>{record.complaintId}</td>
                            <td>{record.complaintType}</td>
                            <td>{record.roomNumber}</td>
                            <td>{record.description}</td>
                            <td className={record.status === 'Open' ? 'open' : 'close'}>
                                <span className="icon-txt">{record.status === 'Open' ? '❌' : '✔️'}</span>
                                {record.status}
                            </td>
                            <td>
                                <button onClick={deleteComplaintRecord(record.complaintId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to={`/updateStudentComplaint`}>
                <button className='upd-btn'>Update Record</button>
            </Link>
            <ToastContainer />
        </div>
    );
}

export default ViewStudentComplaint;