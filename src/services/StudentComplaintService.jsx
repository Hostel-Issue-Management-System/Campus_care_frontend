import axios from 'axios';

const STUDENT_COMPLAINT_API_BASE_URL = "http://localhost:9101/complaintRecord";
const STUDENT_REGISTER_API_BASE_URL = "http://localhost:9101/auth";


class StudentComplaintService {

    getEmployees() {
        return axios.get(STUDENT_COMPLAINT_API_BASE_URL);
    }

    register(details) {
        console.log(STUDENT_REGISTER_API_BASE_URL + '/register')
        console.log(details)
        return axios.post(STUDENT_REGISTER_API_BASE_URL + '/register', details);
    }

    createStudentComplaint(studentComplaint) {
        console.log(STUDENT_COMPLAINT_API_BASE_URL + '/addComplaintRecord')
        console.log(studentComplaint)
        return axios.post(STUDENT_COMPLAINT_API_BASE_URL + '/addComplaintRecord', studentComplaint);
    }

    getStudentComplaint(rollNumber) {
        console.log(rollNumber)
        console.log(STUDENT_COMPLAINT_API_BASE_URL + '/getComplaintRecordByRollNumber/' + rollNumber)
        return axios.post(STUDENT_COMPLAINT_API_BASE_URL + '/getComplaintRecordByRollNumber/' + rollNumber);
    }

    getStudentComplaint(rollNumber) {
        console.log(rollNumber)
        console.log(STUDENT_COMPLAINT_API_BASE_URL + '/getComplaintRecordByRollNumber/' + rollNumber)
        return axios.post(STUDENT_COMPLAINT_API_BASE_URL + '/getComplaintRecordByRollNumber/' + rollNumber);
    }
    getAllStudentComplaint(rollNumber) {
        console.log(STUDENT_COMPLAINT_API_BASE_URL + '/getAllComplaintRecords')
        return axios.get(STUDENT_COMPLAINT_API_BASE_URL + '/getAllComplaintRecords');
    }

    updateStudentComplaint(studentComplaint) {
        return axios.put(STUDENT_COMPLAINT_API_BASE_URL + '/updateComplaintRecord', studentComplaint);
    }

    resolveStudentComplaintById(complaintId) {
        console.log(STUDENT_COMPLAINT_API_BASE_URL + '/resolveComplaintRecordByComplaintId/' + complaintId);
        return axios.put(STUDENT_COMPLAINT_API_BASE_URL + '/resolveComplaintRecordByComplaintId/' + complaintId);
    }

    deleteStudentComplaint(complaintId) {
        return axios.delete(STUDENT_COMPLAINT_API_BASE_URL + '/deleteComplaintRecordByComplaintId/' + complaintId);
    }
}

export default new StudentComplaintService()