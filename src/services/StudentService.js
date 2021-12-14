import axios from "axios";

const STUDETN_API_BASE_URL = "hhtp://localhost:8085/api/v1/students"

class StudentService{

    getStudents(){
        return axios.get(STUDETN_API_BASE_URL);
    }

    addStudent(student){
        return axios.post(STUDETN_API_BASE_URL,student);
    }

    getStudentById(studentId){
        return axios.get(STUDETN_API_BASE_URL+'/'+studentId);
    }

    updateStudent(student, studentId){
        return axios.put(STUDETN_API_BASE_URL+'/'+studentId,student);
    }

    deleteStudent(studentId){
        return axios.delete(STUDETN_API_BASE_URL+'/'+studentId);
    }
}

export  default new StudentService()