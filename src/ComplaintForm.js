import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './ComplaintForm.css';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  fileInput: {
    display: 'none',
  },
}));

function ComplaintForm() {
  const classes = useStyles();

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

  const [showToast, setShowToast] = useState(false);


  return (
    <div className="complaint-form-container">
      <h1>Complaint Form</h1>
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
      <form onSubmit={handleSubmit}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel style={{ width: '500%' }}  id="complaintType-label">Complaint Type</InputLabel>
          <Select
          
            labelId="complaintType-label"
            id="complaintType"
            value={complaintType}
            onChange={(event) => setComplaintType(event.target.value)}
            label="Complaint Type"
          >
            <MenuItem value="">
              <em>-- Select complaint type --</em>
            </MenuItem>
            <MenuItem value="electricity">Electricity</MenuItem>
            <MenuItem value="plumbing">Plumbing</MenuItem>
            <MenuItem value="cleanliness">Cleanliness</MenuItem>
            <MenuItem value="others">Others</MenuItem>
          </Select>
        </FormControl>

        <Grid type='column'> <TextField
          id="roomNumber"
          label="Room Number"
          variant="outlined"
          value={roomNumber}
          onChange={(event) => setRoomNumber(event.target.value)}
          className={classes.formControl}
          style={{ width: '50%' }}
        />

        <TextField
          id="description"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          value={description}
          onChange={(event) => setDescription(event.target.value)}  style={{ width: '100%' }}  /></Grid>
           

          <input
            accept="image/*, .pdf"
            className={classes.fileInput}
            id="file"
            type="file"
            onChange={handleFileChange}
          />
       
          <Button className="button-container" onClick={handleSubmit} variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <ToastContainer position="bottom-center"
                                           autoClose={5000}
                                            hideProgressBar={false}
                                            newestOnTop={false}
                                            closeOnClick
                                            rtl={false}
                                            pauseOnFocusLoss
                                            draggable
                                            pauseOnHover
                                            theme="dark"/>
        </form>
      </div>);}
      export default ComplaintForm;