
import './Home.css';

import Navbar from "../../components/Navbar/Navbar";

import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Home() {
    const [name, setName] = useState(JSON.parse(localStorage.getItem("user")).name);
    return (

        <div>
            <Navbar />

            <h2 className='w-txt'>Welcome {name} !!</h2>


        </div>

    )
}

export default Home;
