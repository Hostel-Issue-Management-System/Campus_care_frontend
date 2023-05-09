
import './Register.css';
import React, { Component } from 'react'
import StudentComplaintService from '../../services/StudentComplaintService';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
import Navbar from "../../components/Navbar/Navbar";
import Textbox from '../../components/Textbox/Textbox';

import { Alert, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Register() {
    const { id } = useParams();
    const [role, setRole] = useState('');
    const [description, setDescription] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [status, setStatus] = useState('');
    const [studentId, setStudentId] = useState('');
    const [name, setName] = useState("")
    const [rollNumber, setRollNumber] = useState("");

    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [failedLogin, setFailedLogin] = useState(false);


    const saveLogin = (e) => {
        e.preventDefault();

        const studentRegister = { role, password, name, rollNumber };
        // console.log('studentRegister => ' + JSON.stringify(studentRegister));
        StudentComplaintService.register(studentRegister).then((data) => {
            if (data.status === 200) {
                toast.success("You are now registered!!")
            } else {
                navigate('/viewStudentComplaintManagement')
            }
        })
    };




    return (

        <div className='login'>
            <Form className='login-flex'>





                <Form.Group className='form-group'>
                    <p className='login-txt1'>Role:</p>
                    <Form.Check type='radio' label={<span className='radio-label'>Student</span>} name='login' onClick={() => setRole('student')} />
                    <Form.Check type='radio' label={<span className='radio-label'>Staff</span>} name='login' onClick={() => setRole('staff')} />
                </Form.Group>

                <Form.Group className='label-txt1'>
                    <Textbox label="Name.:" type="text" onChange={(e) => setName(e.target.value)} />
                </Form.Group >

                <Form.Group className='label-txt2'>
                    <Textbox label="Roll No.:" type="text" onChange={(e) => setRollNumber(e.target.value)} />
                </Form.Group >

                <Form.Group className='label-txt3'>
                    <Textbox label="Password:" type="password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group >
                <div className='button-label'>
                    <Button className='btn-success' onClick={saveLogin}><span className='btn-text'>Register</span></Button>
                </div>

                <div className='button-label'>
                    <Link to="/">
                        <h4 className='font-clr-h5'>Back to login</h4>
                    </Link>
                </div>

            </Form>
            <ToastContainer />

        </div>

    );
}

export default Register;