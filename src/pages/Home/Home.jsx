
import './Home.css';
import Textbox from '../../components/Textbox/Textbox'

import React, { useState } from 'react'
import {Alert, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Home() {
  const [selectedOption, setSelectedOption] = useState("")
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failedLogin, setFailedLogin] = useState(false);
  const onLogin = () => {
    const obj = {
      id: username,
      password,
      role: selectedOption
    }
    fetch("http://localhost:9100/authenticate", {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(obj)
    }).then(response => response.json())
    .then((data) => {
      if (data.status === 200) {
        setFailedLogin(false);
        localStorage.setItem("token", data.object.accessToken);
        localStorage.setItem("user", JSON.stringify(data.object))
        if (selectedOption === 'doctor') {
          navigate('/doctor/requestConsent')
        } else {
          navigate('/patient/PatientPendingCR')
        } 
      } else {
        setFailedLogin(true)
      }
    }).catch(e => setFailedLogin(true))
    
  }
  return (
 
      <div className='login'>
           <Form className='login-form'>
  {failedLogin && <Alert variant='danger'>Wrong Credentials</Alert>}
  <Form.Group className='form-group'>
    <p className='logintext'>Login as:</p>
    <Form.Check type='radio' label={<span className='radio-label'>Student</span>} name='login' onClick={() => setSelectedOption('student') }/>
    <Form.Check type='radio' label={<span className='radio-label'>Staff</span>} name='login' onClick={() => setSelectedOption('staff')}/>
  </Form.Group>
  <Form.Group className='label'>
    <Textbox label="Username" type="text" onChange={(e) => setUsername(e.target.value)}/>
  </Form.Group>
  <Form.Group className='label'>
    <Textbox label="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
  </Form.Group>
  <div className='button-label'>
    <Button className='btn-success' onClick={() => onLogin()}><span className='btn-text'>Login</span></Button>
  </div>
</Form>

        </div>
    
  )
}

export default Home;