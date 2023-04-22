import React, { Component } from 'react'
import StudentComplaintService from '../../services/StudentComplaintService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './CreateStudentComplaint.css';


function CreateStudentComplaint() {
    const { id } = useParams();
    const [complaintType, setComplaintType] = useState('');
    const [description, setDescription] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [status, setStatus] = useState('');
    const [studentId, setStudentId] = useState('');
    //   const history = useHistory();

    //   useEffect(() => {
    //     if (id === '_add') {
    //       return;
    //     }
    //     StudentComplaintService.getEmployeeById(id)
    //       .then((res) => {
    //         const employee = res.data;
    //         setFirstName(employee.firstName);
    //         setLastName(employee.lastName);
    //         setEmailId(employee.emailId);
    //       });
    //   }, [id]);



    const notify = () => {
        // inbuilt-notification
        toast.warning('Danger')
        // inbuilt-notification
        toast.success('🦄 Wow so easy!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        // inbuilt-notification
        toast.info('GeeksForGeeks')
        // inbuilt-notification
        toast.error('Runtime error')
        // default notification
        toast('Hello Geeks')

    }

    const saveStudent = (e) => {
        e.preventDefault();
        const studentComplaint = { complaintType, description, roomNumber, status, studentId };
        console.log('studentComplaint => ' + JSON.stringify(studentComplaint));
        setStatus('Open')
        // if (id === '_add') {
        StudentComplaintService.createStudentComplaint(studentComplaint)
        // .then(() => {
        //   history.push('/employees');
        // });
        // } 
        // else {
        //   StudentComplaintService.updateEmployee(employee, id)
        //     .then(() => {
        //       history.push('/employees');
        //     });
        // }
    };

    const changeComplaintTypeHandler = (event) => {
        setComplaintType(event.target.value);
    };

    const changeDescriptionHandler = (event) => {
        setDescription(event.target.value);
    };

    const changeRoomNumberHandler = (event) => {
        setRoomNumber(event.target.value);
    };

    const changeStatusHandler = (event) => {
        setStatus(event.target.value);
    };

    const changeStudentIdHandler = (event) => {
        setStudentId(event.target.value);
    };

    const getTitle = () => {
        if (id === '_add') {
            return <h3 className="text-center">Add Employee</h3>;
        }
        // return <h3 className="text-center">Update Employee</h3>;
    };

    return (
        <div className="complaint-form-container">
            <h1 className="complaint-form-title">Complaint Form</h1>

            <form>
                <div className="form-group">
                    <label> Complaint Type: </label>
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
                        className="form-control"
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
                        className="form-control"
                        name="description"
                    ></textarea>
                </div>


                <button className="btn btn-success" onClick={saveStudent}>Submit</button>
                {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
            </form>
            <ToastContainer />
        </div>
    );
};

export default CreateStudentComplaint;
