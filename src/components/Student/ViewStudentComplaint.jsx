import React, { Component } from 'react'
import StudentComplaintService from '../../services/StudentComplaintService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './ViewStudentComplaint.css';
import UpdateStudentComplaint from '../../components/Student/UpdateStudentComplaint';


import { Link } from 'react-router-dom';

function ViewStudentComplaint() {
    // define the URL for the API endpoint
    const [complaintRecords, setComplaintRecords] = useState([]);
    const [complaintId, setComplaintId] = useState();
    const url = 'http://localhost:9101/complaintRecord/getComplaintRecordByStudentId/';

    // define the student ID you want to fetch data for
    const studentId = '123';

    // useEffect(() => {
    //     axios
    //       .post(url+ studentId )
    //       .then(response => {
    //         console.log(response.data);
    //         setComplaintRecords(response.data);
    //       })
    //       .catch(error => console.error(error));
    //   }, [studentId]);

    useEffect(() => {
        StudentComplaintService
            .getStudentComplaint(studentId)
        .then(response => {
            console.log(response.data);
            setComplaintRecords(response.data);
        })
        .catch(error => console.error(error));
    }, [studentId]);


    const deleteComplaintRecord = (id) => async () => {
        StudentComplaintService
            .deleteStudentComplaint(id)
        .then(response => {
            console.log(response.data);
            setComplaintRecords(response.data);
            window.location.reload();
            alert("Complaint" + id + "Deleted");
        })
        .catch(error => console.error(error));
    }

    const updateComplaintRecord = () => async () => {
        UpdateStudentComplaint()
        .then(response => { console.log(response.data); })
        .catch(error => console.error(error));
    }

    return (
        <div>
            <h1>Complaint Records for Student {studentId}</h1>
            <table>
                <thead>
                    <tr>
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

                            <td className={record.status ? 'open' : 'closed'}>
                                <span className="icon">{record.status ? '❌' : '✔️'}</span>
                                {record.status ? 'No' : 'Yes'}
                            </td>
                            <td>
                                <button onClick={deleteComplaintRecord(record.complaintId)}>Delete</button>


                                <Link to={`/updateStudentComplaint`}>
                                    <button>Update</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewStudentComplaint;