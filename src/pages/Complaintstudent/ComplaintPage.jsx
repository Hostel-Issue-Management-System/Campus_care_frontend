import React from 'react';
import ComplaintTable from './ComplaintTable'; // Import the ComplaintTable component

const ComplaintPage = () => {
  // Custom data for complaints
  const complaintsData = [
    { id: 1, roomNo: '101', problemType: 'Electrical', description: 'Power outage', resolved: false },
    { id: 2, roomNo: '202', problemType: 'Plumbing', description: 'Leaking faucet', resolved: false },
    { id: 3, roomNo: '303', problemType: 'HVAC', description: 'AC not working', resolved: true },
    { id: 1, roomNo: '101', problemType: 'Electrical', description: 'Power outage', resolved: false },
    { id: 2, roomNo: '202', problemType: 'Plumbing', description: 'Leaking faucet', resolved: false },
    { id: 3, roomNo: '303', problemType: 'HVAC', description: 'AC not working', resolved: true },
    { id: 1, roomNo: '101', problemType: 'Electrical', description: 'Power outage', resolved: false },
    { id: 2, roomNo: '202', problemType: 'Plumbing', description: 'Leaking faucet', resolved: false },
    { id: 3, roomNo: '303', problemType: 'HVAC', description: 'AC not working', resolved: true },
    { id: 1, roomNo: '101', problemType: 'Electrical', description: 'Power outage', resolved: false },
    { id: 2, roomNo: '202', problemType: 'Plumbing', description: 'Leaking faucet', resolved: false },
    { id: 3, roomNo: '303', problemType: 'HVAC', description: 'AC not working', resolved: true },
  ];

  return (
    <div>
      <div style={{textAlign: 'center'}}><h1 style={{margin: '0', fontSize: '36px'}}>Complaints Management</h1></div>
      
      <ComplaintTable complaints={complaintsData} />
    </div>
  );
};

export default ComplaintPage;