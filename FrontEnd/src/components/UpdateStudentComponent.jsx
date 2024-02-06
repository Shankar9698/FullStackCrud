import React, { Component } from 'react';
import StudentService from '../services/StudentService';
import { withRouter } from 'react-router-dom';

 class UpdateStudentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: '',
      lastName: '',
      emailId: ''
    };

    this.firstNameHandler = this.firstNameHandler.bind(this);
    this.lastNameHandler = this.lastNameHandler.bind(this);
    this.emailIdHandler = this.emailIdHandler.bind(this);
    this.updateStudent = this.updateStudent.bind(this);
  }

  componentDidMount() {
    StudentService.getStudentById(this.state.id)
      .then((resp) => {
        let student = resp.data;
        this.setState({
          firstName: student.firstName || '',
          lastName: student.lastName || '',
          emailId: student.emailId || ''
        }, () => {
          console.log('State after fetching:', this.state);
        });
      });
  }

  updateStudent = (e) => {
    e.preventDefault();
    let student = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId
    };

   

    // Perform API call or update logic here
    StudentService.updateStudent(student,this.state.id)
      .then(response => {
       // this.props.history.push('/students');
        const viewUrl = '/students';
        window.location.href = viewUrl;
        console.log('Student updated successfully:', response);
        // Optionally, you can redirect or perform other actions after a successful update.
      });

  };
  

  firstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  lastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  emailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  cancel = () => {
    this.props.history.replace("/");
    // this.props.history.push("/students");
    // const viewUrl = '/students';
    // window.location.href = viewUrl;
    window.location.replace(window.location.pathname);
  
  };

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className='text-center'>Update students</h3>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>First Name : </label>
                    <input placeholder='Enter First Name' name='firstName' className='form-control' value={this.state.firstName} onChange={this.firstNameHandler}></input>
                    <label>Last Name : </label>
                    <input placeholder='Enter Last Name' name='lastName' className='form-control' value={this.state.lastName} onChange={this.lastNameHandler}></input>
                    <label>EmailID : </label>
                    <input placeholder='Enter EmailId' name='emailId' className='form-control' value={this.state.emailId} onChange={this.emailIdHandler}></input>
                    <button className='btn btn-success' onClick={this.updateStudent}>Update</button>
                    <button className='btn btn-danger' style={{ marginLeft: "10px" }} onClick={this.cancel.bind(this)}>Cancel</button>
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
export default withRouter(UpdateStudentComponent);
