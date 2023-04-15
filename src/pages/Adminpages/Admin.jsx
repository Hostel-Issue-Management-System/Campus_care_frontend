import { colors } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

import './Admin.css'; 

const Admin = () => {
    const [requests, setRequests] = useState([
        { id: 1, roomNo: '101', reqType: 'Maintenance', description: 'Bulb needs to be replaced', resolved: false },
        { id: 2, roomNo: '201', reqType: 'Laundry', description: 'Need laundry service', resolved: false },
        { id: 3, roomNo: '301', reqType: 'WiFi', description: 'WiFi not working', resolved: true },
        { id: 4, roomNo: '102', reqType: 'Housekeeping', description: 'Need room cleaning', resolved: false },
        { id: 2, roomNo: '201', reqType: 'Laundry', description: 'Need laundry service', resolved: false },
        { id: 3, roomNo: '301', reqType: 'WiFi', description: 'WiFi not working', resolved: true },
        { id: 4, roomNo: '102', reqType: 'Housekeeping', description: 'Need room cleaning', resolved: false },
        { id: 5, roomNo: '202', reqType: 'Maintenance', description: 'AC not working', resolved: false },
      ]);

 

  //
  return (
    <div className="dashboard-container">
      <h1>Requests Dashboard</h1>
      <div className="requests-container">
        {requests.map(request => (
          <div key={request.id} className="request-card">
            <h3>Request ID: {request.id}</h3>
            <p>Room No: {request.roomNo}</p>
            <p>Request Type: {request.reqType}</p>
            <p>Description: {request.description}</p>
            {request.resolved ? (
              <p className="resolved" >Resolved</p>
            ) : (
              <button >Resolve</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
