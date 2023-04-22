import axios from 'axios';

const STUDENT_COMPLAINT_API_BASE_URL = "http://localhost:9101/complaintRecord";


class StudentComplaintService {

    getEmployees(){
        return axios.get(STUDENT_COMPLAINT_API_BASE_URL);
    }

    createStudentComplaint(studentComplaint){
        console.log(STUDENT_COMPLAINT_API_BASE_URL+'/addComplaintRecord')
        console.log(studentComplaint)
        return axios.post(STUDENT_COMPLAINT_API_BASE_URL+'/addComplaintRecord', studentComplaint);
    }

    getStudentComplaint(studentId){
        return axios.post(STUDENT_COMPLAINT_API_BASE_URL + '/getComplaintRecordByStudentId/' + studentId);
    }

    updateStudentComplaint(studentComplaint){
        return axios.put(STUDENT_COMPLAINT_API_BASE_URL + '/updateComplaintRecord', studentComplaint);
    }

    resolveStudentComplaintById(complaintId){
        console.log(STUDENT_COMPLAINT_API_BASE_URL+'/resolveComplaintRecordByComplaintId/'+ complaintId);
        return axios.put(STUDENT_COMPLAINT_API_BASE_URL + '/resolveComplaintRecordByComplaintId/'+ complaintId);
    }

    deleteStudentComplaint(complaintId){
        return axios.delete(STUDENT_COMPLAINT_API_BASE_URL + '/deleteComplaintRecordByComplaintId/' + complaintId);
    }
}

export default new StudentComplaintService()