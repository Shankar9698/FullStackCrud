import React, { Component } from 'react'
import StudentService from '../services/StudentService';

export default class CreateStudentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstName:'',
       lastName:'',
       emailId:''

    }
    this.firstNameHandler=this.firstNameHandler.bind(this);
    this.lastNameHandler=this.lastNameHandler.bind(this);
    this.emailIdHandler=this.emailIdHandler.bind(this);

  }
  firstNameHandler=(event=>{
    this.setState({firstName:event.target.value})
  })
  lastNameHandler=(event=>{
    this.setState({lastName:event.target.value})
  })
  emailIdHandler=(event=>{
    this.setState({emailId:event.target.value})
  })
  saveStudent = (e) => {
    e.preventDefault();
    let student = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
    console.log('student => ' + JSON.stringify(student));

    StudentService.createStudent(student).then(res =>{
          console.log("student details created ",res.data);
            this.props.history.push('/');
            const viewUrl = '/';
            window.location.href = viewUrl;
        });

}
cancel(){
  this.props.history.push("/");
}
  
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className = "card col-md-6 offset-md-3 offset-md-3">
              <h3 className='text-center'>Add students</h3>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>First Name : </label>
                    <input placeholder='Enter First Name' name='firstName' className='form-control' value={this.state.firstName} onChange={this.firstNameHandler}></input>
                    <label>Last Name : </label>
                    <input placeholder='Enter Last Name' name='lastName' className='form-control'value={this.state.lastName} onChange={this.lastNameHandler}></input>
                    <label>EmailID : </label>
                    <input placeholder='Enter EmailId' name='emailId' className='form-control' value={this.state.emailId} onChange={this.emailIdHandler}></input>
                    <button className='btn btn-success' onClick={this.saveStudent}>Save</button>
                    <button className='btn btn-danger' style={{marginLeft:"10px"}} onClick={this.cancel.bind(this)}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


