import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from "../../pages/Login/Login";



const Navbar = () => {


  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>C</span>ampus
            <span>C</span>are
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div className="icons">
          <ul>
            <li>
              <Link to="/home">
                <h3>Home</h3>
              </Link>
            </li>
            <li>
              <Link to="/createStudentComplaint">
                <h3>Create Complaint</h3>
              </Link>
            </li>
            <li>
              <Link to="/viewStudentComplaint">
                <h3>View Complaints</h3>
              </Link>
            </li>
            <li>
              <Link to="/">
                <h3>Logout</h3>
              </Link>
            </li>
          </ul>
        </div>



      </nav>


    </>
  );
};

export default Navbar;