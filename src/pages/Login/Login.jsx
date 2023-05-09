
import './Login.css';
import Textbox from '../../components/Textbox/Textbox';

import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [selectedOption, setSelectedOption] = useState("")
  const navigate = useNavigate();
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");
  const [failedLogin, setFailedLogin] = useState(false);
  const onLogin = () => {
    const obj = {
      rollNumber: rollNumber,
      password,
      role: selectedOption
    }



    fetch("http://localhost:9101/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(response => response.json())
      .then((data) => {
        if (data.status === 200) {
          setFailedLogin(false);
          toast.success("Login Sucessful")
          localStorage.setItem("token", data.object.accessToken);
          localStorage.setItem("user", JSON.stringify(data.object))
          if (selectedOption === 'student') {
            navigate('/home')
          } else {
            navigate('/viewStudentComplaintManagement')
          }
        } else {
          setFailedLogin(true)
        }
      }).catch(e => setFailedLogin(true))

  }
  return (

    <div className='login'>
      <Form className='login-flex'>

        <Form.Group className='form-group'>
          <p className='login-txt'>Login as:</p>
          <Form.Check type='radio' label={<span className='radio-label'>Student</span>} name='login' onClick={() => setSelectedOption('student')} />
          <Form.Check type='radio' label={<span className='radio-label'>Staff</span>} name='login' onClick={() => setSelectedOption('staff')} />
        </Form.Group>
        <Form.Group className='label'>
          <Textbox label="Roll No.:" type="text" onChange={(e) => setRollNumber(e.target.value)} />
        </Form.Group>
        <Form.Group className='label'>
          <Textbox label="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group >
        <div className='button-label'>
          <Button className='btn-success' onClick={() => onLogin()}><span className='btn-text'>Login</span></Button>
        </div>
        <h6 className='font-clr'>Not Registered?</h6>
        <Link to="/register">
          <h4 className='font-clr-h5'>Register Here</h4>
        </Link>
        {failedLogin && <Alert><h3>Wrong Credentials</h3></Alert>}

      </Form>
      <ToastContainer />
    </div>

  )
}

export default Login;