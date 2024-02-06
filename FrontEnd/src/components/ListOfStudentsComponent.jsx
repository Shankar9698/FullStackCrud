import React, { Component } from 'react'
import EmployeeService from '../services/StudentService'
import StudentService from '../services/StudentService';

  class ListOfStudentsComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         student:[]
      }
      this.addStudent= this.addStudent.bind(this);
      this.editStudent=this.editStudent.bind(this);
      this.deleteStudent=this.deleteStudent.bind(this);
    }

    componentDidMount() {
      EmployeeService.getAllStudents().then(res => {
        this.setState({ student: res.data });
      });
    }

    addStudent(){
     //this.props.history.push('/add-student');
     const viewUrl = '/add-student';
      window.location.href = viewUrl;
    }

    editStudent(id){
     // this.props.history.push(`/update-student/${id}`);
      const viewUrl = `/update-student/${id}`;
      window.location.href = viewUrl;
    }

    deleteStudent(id) {
      StudentService.deleteStudent(id).then(() => {
        this.setState(prevState => ({
          student: prevState.student.filter(student => student.id !== id)
        }));
      }).catch(error => {
        console.error('Error deleting student:', error);
      });
    }
    
    viewStudent(id){
      //this.props.history.push(`/view-student/${id}`);
      const viewUrl = `/view-student/${id}`;
      window.location.href = viewUrl;
    }
  render() {
    return (
      <div>
        <h2 className="text-center">Students List</h2>
        <div className="row">
          <button onClick={this.addStudent}>Add Student</button>
         
          <table className="table table-striped table-bordered">

            <thead>
              <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
             
              this.state.student.map(
                student =>
                <tr key={student.id}>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.emailId}</td>
                  <td>

                    
                     <button className='btn btn-primary' onClick={()=>this.editStudent(student.id)}>Update</button>
                    <button className='btn btn-danger' style={{marginLeft:"10px"}} onClick={()=>this.deleteStudent(student.id)}>Delete</button>
                    <button className='btn btn-info' style={{marginLeft:"10px"}} onClick={()=>this.viewStudent(student.id)}>View</button>
                  </td>

                </tr>
              )
              }
            </tbody>
          </table>

        </div>
      </div>
    )
  }
}
export default ListOfStudentsComponent;
