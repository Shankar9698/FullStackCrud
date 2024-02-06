import axios from 'axios';
const STUDENT_API_BASE_URL="http://localhost:9595/"//lets try later with this port
class StudentService {
  getAllStudents(){
    return axios.get("http://localhost:9191/students/viewall");
  }

   createStudent(student){
     return axios.post("http://localhost:9090/studentsc/create",student);
   }

   getStudentById(id){
    return axios.get("http://localhost:9292/students/"+id);
   }
   updateStudent(student,id){
    return axios.put("http://localhost:9393/studentsu/"+id,student);
   }
   deleteStudent(id){
    return axios.delete("http://localhost:9494/studentsd/"+id);
   }

}
export default new StudentService;