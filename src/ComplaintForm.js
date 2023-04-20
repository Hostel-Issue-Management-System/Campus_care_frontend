import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './ComplaintForm.css';

function ComplaintForm() {
  const [complaintType, setComplaintType] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('complaintType', complaintType);
    formData.append('roomNumber', roomNumber);
    formData.append('description', description);
    if (file) {
      formData.append('file', file);
    }

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

    //   try {
    //     const response = await axios.post('/api/complaints', formData, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data'
    //       }
    //     });
    //     setSuccessMessage(response.data.message);
    //   } catch (error) {
    //     setErrorMessage('Failed to submit complaint');
    //   }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="complaint-form-container">
      <h1 className="complaint-form-title">Complaint Form</h1>
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="complaint-form">
        <label className="complaint-form-label">Complaint Type</label>
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

        <input
          id="roomNumber"
          type="text"
          placeholder="Room Number"
          value={roomNumber}
          onChange={(event) => setRoomNumber(event.target.value)}
          className="complaint-form-input"
        />

        <textarea
          id="description"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="complaint-form-textarea"
        ></textarea>

     

        <button type="submit" className="complaint-form-button">
          Submit
          </button>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default ComplaintForm;