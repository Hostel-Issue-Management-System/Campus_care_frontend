import React, { Component } from 'react'
import StudentComplaintService from '../../services/StudentComplaintService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './CreateStudentComplaint.css';
import Navbar from "../../components/Navbar/Navbar";

function CreateStudentComplaint() {
    const { id } = useParams();
    const [complaintType, setComplaintType] = useState('');
    const [description, setDescription] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [status, setStatus] = useState('Open');
    const [rollNumber, setRollNumber] = useState(JSON.parse(localStorage.getItem("user")).rollNumber);



    const saveStudent = (e) => {
        e.preventDefault();
        const studentComplaint = { complaintType, description, roomNumber, status, rollNumber };
        console.log('studentComplaint => ' + JSON.stringify(studentComplaint));
        StudentComplaintService.createStudentComplaint(studentComplaint).then((data) => {
            if (data.status === 200) {
                toast.info("Complaint Registered Successfully!!")
            }
        })
    };

    return (

        <div>
            <Navbar />
            <div className="complaint-form-container1">

                <h1 className="complaint-form-title">Complaint Form</h1>

                <form>
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
                        <pre> </pre>
                        <textarea
                            id="description"
                            placeholder="Description"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            className="form-control-des"
                            name="description"
                        ></textarea>
                    </div>


                    <button className="btn-success" onClick={saveStudent}>Submit</button>
                    {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default CreateStudentComplaint;
