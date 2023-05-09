import React, { Component } from 'react'
import StudentComplaintService from '../../services/StudentComplaintService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './CreateStudentComplaint.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


function UpdateStudentComplaint() {
    const [complaintId, setComplaintId] = useState('');
    const [complaintType, setComplaintType] = useState('');
    const [description, setDescription] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [status, setStatus] = useState('Open');
    const [rollNumber, setRollNumber] = useState(JSON.parse(localStorage.getItem("user")).rollNumber);


    const updateComplaint = (e) => {
        e.preventDefault();
        const studentComplaint = { complaintId, complaintType, description, roomNumber, status, rollNumber };

        console.log('studentComplaint => ' + JSON.stringify(studentComplaint));
        StudentComplaintService.updateStudentComplaint(studentComplaint).then((data) => {
            if (data.status === 200) {
                toast.success("Complaint Updated Successfully!!")
            }
        })

    };





    return (
        <div className="complaint-form-container1">

            <h1 className="complaint-form-title">Complaint Form</h1>

            <form>
                <div className="form-group">
                    <label> Complaint Id: </label>
                    <input
                        placeholder="Complaint Id"
                        name="complaintId"
                        className="form-control-txt"
                        value={complaintId}
                        onChange={(event) => setComplaintId(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className='label-txt'> Complaint Type: </label>
                    <select
                        id="complaintType"
                        value={complaintType}
                        onChange={(event) => setComplaintType(event.target.value)}
                        className="complaint-form-select"
                    >
                        <option value="">-- Select complaint type --</option>
                        <option value="electricity">Electricity</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="cleanliness">Cleanliness</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div className="form-group">
                    <label> Room Number: </label>
                    <input
                        placeholder="Room Number"
                        name="roomNumber"
                        className="form-control-txt"
                        value={roomNumber}
                        onChange={(event) => setRoomNumber(event.target.value)}
                    />
                </div>



                <div className="form-group">
                    <label> Description: </label>
                    <textarea
                        id="description"
                        placeholder="Description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        className="form-control-des"
                        name="description"
                    ></textarea>
                </div>


                <button className="btn btn-success" onClick={updateComplaint}>Submit</button>
                {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
            </form>
            <div className='button-label'>
                <Link to="/home">
                    <h4 className='font-clr-h5'>Back to Home</h4>
                </Link>
            </div>
            <ToastContainer />

        </div>
    );
};

export default UpdateStudentComplaint;
