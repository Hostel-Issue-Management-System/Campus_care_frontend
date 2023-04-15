import React from 'react';
import './ComplaintTable.css'

const ComplaintTable = ({ complaints }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Room No</th>
          <th>Problem Type</th>
          <th>Description</th>
          <th>Resolved</th>
        </tr>
      </thead>
      <tbody>
        {complaints.map(complaint => (
          <tr key={complaint.id}>
            <td>{complaint.id}</td>
            <td>{complaint.roomNo}</td>
            <td>{complaint.problemType}</td>
            <td>{complaint.description}</td>
            <td className={complaint.resolved ? 'resolved' : 'unresolved'}>
              <span className="icon">{complaint.resolved ? '✔️' : '❌'}</span>
              {complaint.resolved ? 'Yes' : 'No'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComplaintTable;
